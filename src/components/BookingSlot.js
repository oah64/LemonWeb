function BookingSlot({ time, isAvailable }) {
  return (
    <li
      className={`booking-slot ${isAvailable ? "slot-available" : "slot-booked"}`}
      aria-label={`${time} — ${isAvailable ? "available" : "booked"}`}
    >
      <span className="slot-time">{time}</span>
      <span className="slot-status">{isAvailable ? "Available" : "Booked"}</span>
    </li>
  );
}

export default BookingSlot;
