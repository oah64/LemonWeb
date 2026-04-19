function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn-primary">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src="/assets/serving.jpg" alt="Little Lemon restaurant food" />
      </div>
    </section>
  );
}

export default Hero;
