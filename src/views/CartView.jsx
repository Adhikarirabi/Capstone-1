import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

const CartView = () => {
  let cartData = useContext(CartContext);
  let totalprice = 0;
  let quantity = 0;
  cartData.cart.forEach((cartItemObj) => {
    totalprice += cartItemObj.prodObj.price * Number(cartItemObj.quantity);
    quantity += Number(cartItemObj.quantity);
  });
  document.title = "Your Cart";
  if (cartData) {
    return (
      <>
        <div className="cartContainer">
          <h1>Your Cart</h1>
          <section className="circles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </section>
          <br />
          <br />
          <div>
            <p>Total Price : ${totalprice}</p>
            <p>Total Items : {quantity}</p>
          </div>
          <button
            className="removeButton"
            onClick={() => {
              cartData.clearCart();
            }}
          >
            Clear Cart
          </button>
          <br />

          <Checkout />

          {cartData.cart.map((cartItemObj) => (
            <CartItem
              key={cartItemObj.prodObj.serialID}
              cartItemObj={cartItemObj}
            />
          ))}
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default CartView;
