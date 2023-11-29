import React from "react";
import "./featuringProducts.css";
import ProductCard from "./productCard";
import plantDB from "./plants.json";

const FeaturingProducts = () => {
  const handleProductClick = (productId) => {
    // Handle the click event for a specific product (if needed)
    console.log(`Product ${productId} clicked`);
  };

  return (
    <div className="featuringProducts centered">
      {plantDB.map((product) => (
        <ProductCard
          productId={product.id}
          productName={product.name}
          productPrice={product.price}
          productImageLink={product.image_link}
          onProductClicked={handleProductClick}
        />
      ))}
    </div>
  );
};

export default FeaturingProducts;
