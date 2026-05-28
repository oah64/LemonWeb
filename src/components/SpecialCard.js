function SpecialCard({ img, alt, title, price, description }) {
  return (
    <article className="card-large">
      <img src={img} alt={alt} />
      <div className="card-large-title">
        <h3>{title}</h3>
        <span className="card-price">{price}</span>
      </div>
      <p>{description}</p>
      <a href="/order" className="card-order-link" aria-label="Order a delivery">
        Order a delivery 🚲
      </a>
    </article>
  );
}

export default SpecialCard;
