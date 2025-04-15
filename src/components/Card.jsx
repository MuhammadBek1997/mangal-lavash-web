const Card = ({ title, price, img }) => {
    return (
      <div className="card">
        <img src={img || "/placeholder.jpg"} alt={title} className="card-img" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">{price} so'm</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  