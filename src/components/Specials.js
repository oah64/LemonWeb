import { Link } from "react-router-dom";
import SpecialCard from "./SpecialCard";

const specials = [
  {
    img: "../assets/greek-salad.jpg",
    alt: "Greek Salad",
    title: "Greek Salad",
    price: "12,00$",
    description:
      "Crisp romaine, Kalamata olives, sun-dried tomatoes, cucumber, and crumbled feta tossed in a zesty oregano vinaigrette. Light, refreshing, and made to order.",
  },
  {
    img: "../assets/bruchetta.svg",
    alt: "Bruchetta",
    title: "Bruchetta",
    price: "8,00 $",
    description:
      "Toasted sourdough rubbed with garlic and topped with a vibrant mix of heirloom tomatoes, fresh basil, and a drizzle of extra-virgin olive oil. Simple and irresistible.",
  },
  {
    img: "../assets/lemon-dessert.jpg",
    alt: "Lemon Dessert",
    title: "Lemon Dessert",
    price: "6,00$",
    description:
      "A silky lemon posset with a buttery shortbread base, topped with candied zest and a dusting of powdered sugar. The perfect bright finish to any Mediterranean meal.",
  },
];

function Specials() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This weeks Specials</h2>
        <Link to="/menu" className="btn-primary">Online Menu</Link>
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
