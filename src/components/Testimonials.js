import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    img: "../assets/Fratze1.png",
    alt: "Customer photo",
    name: "Name 1",
    rating: "★★★★★",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "../assets/Fratze2.png",
    alt: "Customer photo",
    name: "Name 2",
    rating: "★★★★☆",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "../assets/Fratze3.png",
    alt: "Customer photo",
    name: "Name 3",
    rating: "★★★★★",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "../assets/Fratze4.png",
    alt: "Customer photo",
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
