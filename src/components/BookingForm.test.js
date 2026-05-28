import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const today = new Date().toISOString().split("T")[0];
const tomorrow = new Date(Date.now() + 86_400_000).toISOString().split("T")[0];

function renderForm(times = []) {
  render(
    <BookingForm availableTimes={times} dispatch={() => {}} onSubmit={() => {}} />
  );
}

// ── Static rendering ─────────────────────────────────────────────────────────

test("renders static form labels and submit button", () => {
  renderForm();
  expect(screen.getByText("Choose date")).toBeInTheDocument();
  expect(screen.getByText("Choose time")).toBeInTheDocument();
  expect(screen.getByText("Number of guests")).toBeInTheDocument();
  expect(screen.getByText("Occasion")).toBeInTheDocument();
  expect(screen.getByText("Make Your Reservation")).toBeInTheDocument();
});

// ── Date input ───────────────────────────────────────────────────────────────

test("date input has type date, min set to today, and is required", () => {
  renderForm();
  const input = screen.getByLabelText(/choose date/i);
  expect(input).toHaveAttribute("type", "date");
  expect(input).toHaveAttribute("min", today);
  expect(input).toBeRequired();
});

// ── Time select ──────────────────────────────────────────────────────────────

test("time select is required and has a disabled placeholder option", () => {
  renderForm();
  expect(screen.getByLabelText(/choose time/i)).toBeRequired();
  const placeholder = screen.getByRole("option", { name: /select a time/i });
  expect(placeholder).toBeDisabled();
  expect(placeholder).toHaveValue("");
});

test("time select renders each available time as an option", () => {
  const times = ["17:00", "18:00", "19:00"];
  renderForm(times);
  times.forEach((t) =>
    expect(screen.getByRole("option", { name: t })).toBeInTheDocument()
  );
});

// ── Guests input ─────────────────────────────────────────────────────────────

test("guests input has type number, min 1, max 10, step 1, and is required", () => {
  renderForm();
  const input = screen.getByLabelText(/number of guests/i);
  expect(input).toHaveAttribute("type", "number");
  expect(input).toHaveAttribute("min", "1");
  expect(input).toHaveAttribute("max", "10");
  expect(input).toHaveAttribute("step", "1");
  expect(input).toBeRequired();
});

// ── Occasion select ──────────────────────────────────────────────────────────

test("occasion select is required and has a disabled placeholder option", () => {
  renderForm();
  expect(screen.getByLabelText(/occasion/i)).toBeRequired();
  const placeholder = screen.getByRole("option", { name: /select an occasion/i });
  expect(placeholder).toBeDisabled();
  expect(placeholder).toHaveValue("");
});

test("occasion select renders all four occasion options", () => {
  renderForm();
  ["Birthday", "Anniversary", "Business dinner", "Other"].forEach((name) =>
    expect(screen.getByRole("option", { name })).toBeInTheDocument()
  );
});

// ── Submit button ─────────────────────────────────────────────────────────────

test("submit button is disabled when the form is empty", () => {
  renderForm();
  expect(screen.getByRole("button", { name: /make your reservation/i })).toBeDisabled();
});

// ── Validation: date ─────────────────────────────────────────────────────────

test("date: shows error when blurred while empty", () => {
  renderForm();
  fireEvent.blur(screen.getByLabelText(/choose date/i));
  expect(screen.getByRole("alert")).toHaveTextContent("Please choose a date.");
});

test("date: shows error when a past date is entered", () => {
  renderForm();
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: "2020-01-01" } });
  expect(screen.getByRole("alert")).toHaveTextContent("Date cannot be in the past.");
});

test("date: shows no error when today's date is entered", () => {
  renderForm();
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: today } });
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});

// ── Validation: time ─────────────────────────────────────────────────────────

test("time: shows error when blurred without a selection", () => {
  renderForm(["17:00"]);
  fireEvent.blur(screen.getByLabelText(/choose time/i));
  expect(screen.getByRole("alert")).toHaveTextContent("Please choose a time.");
});

test("time: shows no error when a time is selected", () => {
  renderForm(["17:00"]);
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});

// ── Validation: guests ───────────────────────────────────────────────────────

test("guests: shows error when value is below the minimum", () => {
  renderForm();
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "0" } });
  expect(screen.getByRole("alert")).toHaveTextContent("Guests must be between 1 and 10.");
});

test("guests: shows error when value exceeds the maximum", () => {
  renderForm();
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "11" } });
  expect(screen.getByRole("alert")).toHaveTextContent("Guests must be between 1 and 10.");
});

test("guests: shows no error when value is within range", () => {
  renderForm();
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "5" } });
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});

// ── Validation: occasion ─────────────────────────────────────────────────────

test("occasion: shows error when blurred without a selection", () => {
  renderForm();
  fireEvent.blur(screen.getByLabelText(/occasion/i));
  expect(screen.getByRole("alert")).toHaveTextContent("Please select an occasion.");
});

test("occasion: shows no error when an occasion is selected", () => {
  renderForm();
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});

// ── Validation: form submission ───────────────────────────────────────────────

test("submit: reveals errors for every invalid field when submitted while empty", () => {
  renderForm();
  fireEvent.submit(screen.getByRole("form", { name: /table reservation form/i }));
  // guests defaults to 1 (valid) so only date, time, and occasion errors appear
  const alerts = screen.getAllByRole("alert");
  expect(alerts).toHaveLength(3);
  expect(alerts[0]).toHaveTextContent("Please choose a date.");
  expect(alerts[1]).toHaveTextContent("Please choose a time.");
  expect(alerts[2]).toHaveTextContent("Please select an occasion.");
});

test("submit: does not call onSubmit when the form is invalid", () => {
  const onSubmit = jest.fn();
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} onSubmit={onSubmit} />);
  fireEvent.submit(screen.getByRole("form", { name: /table reservation form/i }));
  expect(onSubmit).not.toHaveBeenCalled();
});

test("submit: calls onSubmit with the correct data when all fields are valid", () => {
  const onSubmit = jest.fn();
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} onSubmit={onSubmit} />);
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: tomorrow } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "3" } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
  fireEvent.submit(screen.getByRole("form", { name: /table reservation form/i }));
  expect(onSubmit).toHaveBeenCalledWith({ date: tomorrow, time: "17:00", guests: 3, occasion: "Birthday" });
});

test("submit: resets all fields to their initial values after a successful submission", () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} onSubmit={() => {}} />);
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: tomorrow } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "3" } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
  fireEvent.submit(screen.getByRole("form", { name: /table reservation form/i }));
  expect(screen.getByLabelText(/choose date/i)).toHaveValue("");
  expect(screen.getByLabelText(/choose time/i)).toHaveValue("");
  expect(screen.getByLabelText(/number of guests/i)).toHaveValue(1);
  expect(screen.getByLabelText(/occasion/i)).toHaveValue("");
});
