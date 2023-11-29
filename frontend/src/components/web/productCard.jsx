import React from "react";
import "./productCard.css";

const ProductCard = ({
  productId,
  productName,
  productPrice,
  productImageLink,
  onProductClicked,
}) => {
  return (
    <div
      className="productCard box-shadowing black-text"
      id={productId}
      onClick={() => onProductClicked(productId)}
    >
      <div className="img-wrapper container centered">
        <img src={productImageLink} alt={productName} />
      </div>
      <div className="prod-name-wrapper container centered">
        <h2>{productName}</h2>
      </div>
      <div className="prod-price-wrapper container centered">
        <p>${productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
