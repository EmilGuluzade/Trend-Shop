import React from "react";
import "./HeaderCartButton.css"
import CardIcon from "../Cart/CartIcon";
const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
      <CardIcon></CardIcon>
        
      </span>
      <span>My Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
