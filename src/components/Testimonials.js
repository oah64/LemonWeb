import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { img: "https://via.placeholder.com/150", alt: "name1", name: "Name 1", rating: "Rating" },
  { img: "https://via.placeholder.com/150", alt: "name2", name: "Name 2", rating: "Rating" },
  { img: "https://via.placeholder.com/150", alt: "name3", name: "Name 3", rating: "Rating" },
  { img: "https://via.placeholder.com/150", alt: "name4", name: "Name 4", rating: "Rating" },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} {...testimonial} />
      ))}
    </section>
  );
}

export default Testimonials;
