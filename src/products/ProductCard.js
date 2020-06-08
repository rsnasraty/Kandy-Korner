import React from "react";
import "./Products.css";

const ProductCard = props => {
  return (
    <div className="product-card">
      <div className="card-content">
        <h2>
          Name: <span className="card-productname">{props.product.name}</span>
        </h2>
        <h4> Price: {props.product.price} </h4>
        
      </div>
    </div>
  );
};

export default ProductCard;
