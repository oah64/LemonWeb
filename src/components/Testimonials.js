import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    img: "../assets/Fratze1.png",
    alt: "Customer photo",
    name: "Sofia M.",
    rating: "★★★★★",
    review: "The lemon dessert alone is worth the trip. Every visit feels like being welcomed into someone's home — warm, unhurried, and delicious.",
  },
  {
    img: "../assets/Fratze2.png",
    alt: "Customer photo",
    name: "James R.",
    rating: "★★★★☆",
    review: "Fantastic Greek salad and the bruchetta is the best I've had outside of Italy. Gets busy on weekends, so book ahead!",
  },
  {
    img: "../assets/Fratze3.png",
    alt: "Customer photo",
    name: "Priya K.",
    rating: "★★★★★",
    review: "We celebrated our anniversary here and the staff made it truly special. The food was outstanding — fresh, flavourful, and beautifully presented.",
  },
  {
    img: "../assets/Fratze4.png",
    alt: "Customer photo",
    name: "Tom L.",
    rating: "★★★☆☆",
    review: "Solid food and a great atmosphere. Service was a bit slow on the night we visited, but the bruchetta and dessert more than made up for it.",
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
