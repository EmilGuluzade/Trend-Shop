import React from "react";
import  "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <div>
      <header className="header">
      <h1> Trend Shop</h1>
      <HeaderCartButton></HeaderCartButton>
      </header>
    </div>
  );
};

export default Header;
