/* global fetchAPI, submitAPI */
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import BookingSlot from "../components/BookingSlot";

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_DATE":
      return fetchAPI(new Date(action.date));
    case "SUBMIT_BOOKING":
      return state.filter((t) => t !== action.time);
    default:
      return state;
  }
}

function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookings, setBookings] = useState(
    () => JSON.parse(localStorage.getItem("bookings") || "[]")
  );

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      const updated = [...bookings, formData];
      setBookings(updated);
      localStorage.setItem("bookings", JSON.stringify(updated));
      navigate("/booking-confirmed", { state: { booking: formData } });
    }
  };

  const allTimes = initializeTimes();

  return (
    <section className="booking-page">
      <div className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>Book your table at Little Lemon</p>
      </div>

      <div className="booking-layout">
        <div className="booking-slots-section">
          <h2>Today's Availability</h2>
          <ul className="booking-slots-list" aria-live="polite" aria-label="Time slot availability">
            {allTimes.map((t) => (
              <BookingSlot
                key={t}
                time={t}
                isAvailable={availableTimes.includes(t)}
              />
            ))}
          </ul>
        </div>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmit={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;
