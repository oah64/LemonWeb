function SpecialCard({ img, alt, title, description }) {
  return (
    <div className="card-large">
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SpecialCard;
