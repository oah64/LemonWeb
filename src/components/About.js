function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="about-images">
        <img
          src="/assets/Mario-Adrian-A.jpg"
          alt="Restaurant interior"
          className="about-img-back"
        />
        <img
          src="/assets/Mario-Adrian-B.jpg"
          alt="Restaurant team"
          className="about-img-front"
        />
      </div>
    </section>
  );
}

export default About;
