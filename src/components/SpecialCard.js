function SpecialCard({ img, alt, title, price, description }) {
  return (
    <div className="card-large">
      <img src={img} alt={alt} />
      <div className="card-large-title">
        <h3>{title}</h3>
        <span className="card-price">{price}</span>
      </div>
      <p>{description}</p>
      <a href="/order" className="card-order-link">
        Order a delivery 🚲
      </a>
    </div>
  );
}

export default SpecialCard;
