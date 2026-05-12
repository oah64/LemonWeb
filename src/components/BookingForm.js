import { useState } from "react";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_DATE", date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, guests, occasion });
    setTime("");
    setDate("");
    setGuests(1);
    setOccasion("Birthday");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Table reservation form">
      <div className="form-field">
        <label htmlFor="booking-date">Choose date</label>
        <input
          type="date"
          id="booking-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="booking-time">Choose time</label>
        <select
          id="booking-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="booking-guests">Number of guests</label>
        <input
          type="number"
          id="booking-guests"
          min={1}
          max={10}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="booking-occasion">Occasion</label>
        <select
          id="booking-occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="btn-primary booking-submit">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
