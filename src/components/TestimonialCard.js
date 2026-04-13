function TestimonialCard({ img, alt, name, rating }) {
  return (
    <article className="card-small">
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <p>{rating}</p>
    </article>
  );
}

export default TestimonialCard;
