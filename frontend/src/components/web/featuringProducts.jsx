import React from "react";
import "./featuringProducts.css";
import ProductCard from "./productCard";
import plantDB from "../static/plants.json";

const FeaturingProducts = () => {
  const handleProductClick = (productId) => {
    // Handle the click event for a specific product (if needed)
    console.log(`Product ${productId} clicked`);
  };

  return (
    <div className="featuringProducts centered">
      <div className="title-wrapper">New Products</div>
      {plantDB.map((product) => (
        <ProductCard
          productId={product.id}
          productName={product.name}
          productTypes={product.types}
          productImageLink={product.image_link}
          onProductClicked={handleProductClick}
        />
      ))}
    </div>
  );
};

export default FeaturingProducts;
