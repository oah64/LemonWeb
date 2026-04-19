import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    img: "https://via.placeholder.com/80",
    alt: "name1",
    name: "Name 1",
    rating: "★★★★★",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "https://via.placeholder.com/80",
    alt: "name2",
    name: "Name 2",
    rating: "★★★★☆",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "https://via.placeholder.com/80",
    alt: "name3",
    name: "Name 3",
    rating: "★★★★★",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "https://via.placeholder.com/80",
    alt: "name4",
    name: "Name 4",
    rating: "★★★☆☆",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
