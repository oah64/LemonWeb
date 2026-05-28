import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage, { initializeTimes, updateTimes } from "./BookingPage";

const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

beforeEach(() => {
  global.fetchAPI = jest.fn(() => mockTimes);
  global.submitAPI = jest.fn(() => true);
  localStorage.clear();
});

// ── Pure function tests ──────────────────────────────────────────────────────

test("initializeTimes returns the available times for today from the API", () => {
  const result = initializeTimes();
  expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(result).toEqual(mockTimes);
});

test("updateTimes returns the available times for the selected date from the API", () => {
  const state = ["17:00", "18:00"];
  const result = updateTimes(state, { type: "UPDATE_DATE", date: "2026-05-11" });
  expect(global.fetchAPI).toHaveBeenCalledWith(new Date("2026-05-11"));
  expect(result).toEqual(mockTimes);
});

// ── localStorage tests ───────────────────────────────────────────────────────

test("starts with empty bookings list when localStorage is clear", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );
  expect(localStorage.getItem("bookings")).toBeNull();
});

test("saves submitted booking to localStorage on successful submit", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2026-05-15" } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
  fireEvent.submit(screen.getByRole("form", { name: /table reservation form/i }));

  const saved = JSON.parse(localStorage.getItem("bookings"));
  expect(saved).toHaveLength(1);
  expect(saved[0]).toMatchObject({ date: "2026-05-15", time: "17:00", guests: 1, occasion: "Birthday" });
});

test("appends new booking to existing bookings in localStorage", () => {
  const existing = [{ date: "2026-05-12", time: "18:00", guests: 2, occasion: "Anniversary" }];
  localStorage.setItem("bookings", JSON.stringify(existing));

  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2026-05-15" } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Anniversary" } });
  fireEvent.submit(screen.getByRole("form", { name: /table reservation form/i }));

  const saved = JSON.parse(localStorage.getItem("bookings"));
  expect(saved).toHaveLength(2);
  expect(saved[0]).toEqual(existing[0]);
  expect(saved[1]).toMatchObject({ date: "2026-05-15", time: "17:00" });
});

test("does not write to localStorage when submitAPI returns false", () => {
  global.submitAPI.mockReturnValueOnce(false);

  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2026-05-15" } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
  fireEvent.submit(screen.getByRole("form", { name: /table reservation form/i }));

  expect(localStorage.getItem("bookings")).toBeNull();
});
