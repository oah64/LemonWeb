function TestimonialCard({ img, alt, name, rating, review }) {
  const starCount = (rating.match(/★/g) || []).length;
  return (
    <article className="card-small">
      <p className="card-rating" aria-label={`${starCount} out of 5 stars`}>{rating}</p>
      <div className="card-small-identity">
        <img src={img} alt={alt} />
        <h3>{name}</h3>
      </div>
      <p>{review}</p>
    </article>
  );
}

export default TestimonialCard;
