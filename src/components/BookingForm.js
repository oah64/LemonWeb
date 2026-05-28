import { useState } from "react";

const today = new Date().toISOString().split("T")[0];

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const errors = {
    date: !date
      ? "Please choose a date."
      : date < today
        ? "Date cannot be in the past."
        : "",
    time: !time ? "Please choose a time." : "",
    guests: guests < 1 || guests > 10 ? "Guests must be between 1 and 10." : "",
    occasion: !occasion ? "Please select an occasion." : "",
  };
  const isFormValid = Object.values(errors).every((e) => e === "");

  const touch = (field) => setTouched((t) => ({ ...t, [field]: true }));

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_DATE", date: e.target.value });
    touch("date");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true, occasion: true });
    if (!isFormValid) return;
    onSubmit({ date, time, guests, occasion });
    setTime("");
    setDate("");
    setGuests(1);
    setOccasion("");
    setTouched({ date: false, time: false, guests: false, occasion: false });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Table reservation form"
    >
      <div className="form-field">
        <label htmlFor="booking-date">Choose date</label>
        <input
          type="date"
          id="booking-date"
          min={today}
          value={date}
          onChange={handleDateChange}
          onBlur={() => touch("date")}
          className={touched.date && errors.date ? "invalid" : ""}
          required
        />
        {touched.date && errors.date && (
          <span className="error-msg" role="alert">
            {errors.date}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="booking-time">Choose time</label>
        <select
          id="booking-time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            touch("time");
          }}
          onBlur={() => touch("time")}
          className={touched.time && errors.time ? "invalid" : ""}
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
        {touched.time && errors.time && (
          <span className="error-msg" role="alert">
            {errors.time}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="booking-guests">Number of guests</label>
        <input
          type="number"
          id="booking-guests"
          min={1}
          max={10}
          step={1}
          value={guests}
          onChange={(e) => {
            setGuests(Number(e.target.value));
            touch("guests");
          }}
          onBlur={() => touch("guests")}
          className={touched.guests && errors.guests ? "invalid" : ""}
          required
        />
        {touched.guests && errors.guests && (
          <span className="error-msg" role="alert">
            {errors.guests}
          </span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="booking-occasion">Occasion</label>
        <select
          id="booking-occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            touch("occasion");
          }}
          onBlur={() => touch("occasion")}
          className={touched.occasion && errors.occasion ? "invalid" : ""}
          required
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business dinner">Business dinner</option>
          <option value="Other">Other</option>
        </select>
        {touched.occasion && errors.occasion && (
          <span className="error-msg" role="alert">
            {errors.occasion}
          </span>
        )}
      </div>

      {!Object.values(touched).some(Boolean) && (
        <p className="error-msg">* All fields are required</p>
      )}
      <button
        type="submit"
        className="btn-primary booking-submit"
        disabled={!isFormValid}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
