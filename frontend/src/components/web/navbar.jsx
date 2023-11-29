import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./navbar.css";

const Navbar = ({ selectedItem, setSelectedItem }) => {
  const textColor = selectedItem === "home" ? "white-text" : "black-text";
  const isHomeSelected = selectedItem === "home";

  return (
    <div
      className={`nav-flex ${
        isHomeSelected ? "semi-transparent" : "box-shadowing"
      } w-100`}
    >
      <div className="brand h-100">
        <h2 className={textColor}>King Kush Medicinal</h2>
      </div>
      <div className={`nav h-100`}>
        <NavItem
          text="Home"
          id="home"
          textColor={textColor}
          setSelectedItem={setSelectedItem}
          isSelected={isHomeSelected}
        />
        <NavItem
          text="Products"
          id="products"
          textColor={textColor}
          setSelectedItem={setSelectedItem}
          isSelected={selectedItem === "products"}
        />
        <NavItem
          text="About"
          id="about"
          textColor={textColor}
          setSelectedItem={setSelectedItem}
          isSelected={selectedItem === "about"}
        />
        <NavItem
          text="Contact"
          id="contact"
          textColor={textColor}
          setSelectedItem={setSelectedItem}
          isSelected={selectedItem === "contact"}
        />
        <div
          className={`nav-item ${textColor} cart-icon`}
          onClick={() => setSelectedItem("cart")}
        >
          $100 <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ text, id, textColor, setSelectedItem, isSelected }) => {
  return (
    <div
      className={`nav-item ${textColor} in-sidebar ${
        isSelected ? "active" : ""
      }`}
      onClick={() => setSelectedItem(id)}
    >
      {text}
    </div>
  );
};

export default Navbar;
