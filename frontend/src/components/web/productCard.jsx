import React from "react";
import "./productCard.css";

const ProductCard = ({
  productId,
  productName,
  productImageLink,
  productTypes,
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
      <div className="types-wrapper container centered">
        <ul>
          {productTypes.map((type) => (
            <li key={type.type}>
              {type.type}: ${type.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
