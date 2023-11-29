import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-flex centered w-100">
      <h2 className="white-text">WELCOME TO KING KUSH MEDICINAL</h2>
      <h1 className="white-text">Let's Bring some Goods to your Home!</h1>
      <div className="button-wrapper">
        <div className="button white-text box-shadowing">Shop Now</div>
      </div>
    </div>
  );
};

export default Welcome;
