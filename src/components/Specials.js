import SpecialCard from "./SpecialCard";

const specials = [
  {
    img: "../assets/greek-salad.jpg",
    alt: "Greek Salad",
    title: "Greek Salad",
    price: "12,00$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "../assets/bruchetta.svg",
    alt: "Bruchetta",
    title: "Bruchetta",
    price: "8,00 $",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "../assets/lemon-dessert.jpg",
    alt: "Lemon Dessert",
    title: "Lemon Dessert",
    price: "6,00$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Specials() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This weeks Specials</h2>
        <button className="btn-primary">Online Menu</button>
      </div>
      <div className="highlights-cards">
        {specials.map((special) => (
          <SpecialCard key={special.title} {...special} />
        ))}
      </div>
    </section>
  );
}

export default Specials;
