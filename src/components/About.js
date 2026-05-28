function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon was founded in 1995 by brothers Mario and Adrian Lorenzi,
          who left Limone sul Garda with little more than their grandmother's
          recipe book and a dream. What started as a tiny carry-out on North
          Clark Street has grown into one of Chicago's most beloved neighborhood
          restaurants — but the philosophy hasn't changed: every dish is made
          from scratch, every guest is treated like family, and every plate is a
          little reminder of the Mediterranean sun.
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
