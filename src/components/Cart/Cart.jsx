import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";
import Offcanvas from "../UI/Offcanvas";

const Cart = ({ hideCartHandler }) => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem key={product.id} product={product}></CartItem>
      ))}
    </ul>
  );
  return (
    <Offcanvas hideCartHandler={hideCartHandler}>
      <div className="cart-head">
        <h2>My Cart</h2>
        <a onClick={hideCartHandler} href="/" className="cart-close">
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span>Total </span>
        <span>100 $</span>
      </div>
      <div className="actions">
        <button className="cart-order">Order</button>
        <button className="cart-clear">Clear</button>
      </div>
    </Offcanvas>
  );
};

export default Cart;
