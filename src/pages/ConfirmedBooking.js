import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
  const { state } = useLocation();
  const booking = state?.booking;

  return (
    <section className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for your reservation at Little Lemon. We look forward to seeing you!</p>
      {booking && (
        <ul className="booking-summary">
          <li><strong>Date:</strong> {booking.date}</li>
          <li><strong>Time:</strong> {booking.time}</li>
          <li><strong>Guests:</strong> {booking.guests}</li>
          <li><strong>Occasion:</strong> {booking.occasion}</li>
        </ul>
      )}
    </section>
  );
}

export default ConfirmedBooking;
