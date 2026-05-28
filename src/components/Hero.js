import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <p className="hero-subtitle">Chicago</p>
        <p>
          We are a family-owned Mediterranean restaurant in the heart of
          Chicago. Our chefs bring the sunny flavors of Italy and the Levant to
          your table — fresh ingredients, bold spices, and recipes passed down
          through generations.
        </p>
        <Link to="/reservations" className="btn-primary">
          Reserve a Table
        </Link>
      </div>
      <div className="hero-image">
        <img src="/assets/serving.jpg" alt="Little Lemon restaurant food" />
      </div>
    </section>
  );
}

export default Hero;
