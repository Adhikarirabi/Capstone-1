import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import CartContext from "../context/CartContext";

const CartItem = ({ cartItemObj }) => {
  let cartData = useContext(CartContext);
  return (
    <>
      <div className="CartItemContainer">
        <div className="productWrapper">
          <img
            src={cartItemObj.prodObj.imageURL}
            className="cartItemProductImage"
            alt="product"
          />
          <div>
            <h2>{cartItemObj.prodObj.productName}</h2>${" "}
            {cartItemObj.prodObj.price}
            <br />
            Quanity : {cartItemObj.quantity}
          </div>
        </div>
        <div className="cartItemActions">
          Quantity{" "}
          <input
            type="number"
            min="1"
            value={cartItemObj.quantity}
            onChange={(e) => {
              cartData.updateCartItem(cartItemObj.prodObj, e.target.value);
            }}
            className="quantityEdit"
          />
          <br />
          <button
            className="removeButton"
            onClick={() => cartData.removeFromCart(cartItemObj.prodObj)}
          >
            Delete
            <AiFillDelete className="deleteButton" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
