import React from "react";
import  "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({showCartHandler}) => {
  return (
    <div>
      <header className="header">
      <h1> Trend Shop</h1>
      <HeaderCartButton showCartHandler={showCartHandler}></HeaderCartButton>
      </header>
    </div>
  );
};

export default Header;
