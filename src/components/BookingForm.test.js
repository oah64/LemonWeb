import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders static form labels and submit button", () => {
  render(
    <BookingForm
      availableTimes={[]}
      dispatch={() => {}}
      onSubmit={() => {}}
    />
  );

  expect(screen.getByText("Choose date")).toBeInTheDocument();
  expect(screen.getByText("Choose time")).toBeInTheDocument();
  expect(screen.getByText("Number of guests")).toBeInTheDocument();
  expect(screen.getByText("Occasion")).toBeInTheDocument();
  expect(screen.getByText("Make Your Reservation")).toBeInTheDocument();
});
