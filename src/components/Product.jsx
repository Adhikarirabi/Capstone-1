import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Product = ({ prodObj }) => {
  let cartData = useContext(CartContext);
  return (
    <>
      <div className="product">
        <Link
          className="productLink"
          to={{ pathname: `/product/${prodObj.serialID}` }}
        >
          <img
            src={prodObj.imageURL}
            alt="product"
            className="product__image"
          />
        </Link>
        <div className="product__paragraph">
          <h2 className="product__productName">{prodObj.productName}</h2>
          {prodObj.quantity !== 0 && <p>Quantity {prodObj.quantity}</p>}
          
          {prodObj.quantity === 0 && <p id="outOfStock">Out of Stock </p>}
          <p className="product__price">Price : $ {prodObj.price}</p>
          <p>Maunfacturer : {prodObj.manufacturer}</p>
          {prodObj.quantity ? (
            <button
              className="product__addToCart"
              onClick={(e) => {
                e.stopPropagation();
                cartData.addToCart(prodObj);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
