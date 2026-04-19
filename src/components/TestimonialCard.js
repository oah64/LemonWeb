function TestimonialCard({ img, alt, name, rating, review }) {
  return (
    <article className="card-small">
      <p className="card-rating">{rating}</p>
      <div className="card-small-identity">
        <img src={img} alt={alt} />
        <h3>{name}</h3>
      </div>
      <p>{review}</p>
    </article>
  );
}

export default TestimonialCard;
