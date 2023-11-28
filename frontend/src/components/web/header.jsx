import Navbar from "./navbar";
import Welcome from "./welcome";
import HeaderBackground from "./header-background";
import React from "react";
import "./header.css";

const Header = ({ selectedItem, setSelectedItem }) => {
  return (
    <div className="container header w-100">
      {selectedItem === "home" && <HeaderBackground />}
      <Navbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      {selectedItem === "home" && <Welcome />}
    </div>
  );
};

export default Header;
