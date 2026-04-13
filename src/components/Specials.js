import SpecialCard from "./SpecialCard";

const specials = [
  {
    img: "https://via.placeholder.com/150",
    alt: "Dish 1",
    title: "Dish 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "https://via.placeholder.com/150",
    alt: "Dish 2",
    title: "Dish 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "https://via.placeholder.com/150",
    alt: "Dish 3",
    title: "Dish 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Specials() {
  return (
    <section className="highlights">
      <h2>Specials</h2>
      {specials.map((special) => (
        <SpecialCard key={special.title} {...special} />
      ))}
    </section>
  );
}

export default Specials;
