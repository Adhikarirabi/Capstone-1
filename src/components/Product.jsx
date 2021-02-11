import React from "react";
import { Link } from "react-router-dom";

const Product = ({ prodObj }) => {
  return (
    <Link
      className="productLink"
      to={{ pathname: `/product/${prodObj.serialID}` }}
    >
      <div className="product">
        <img src={prodObj.imageURL} alt="product" className="product__image" />
        <div className="product__paragraph">
          <h2 className="product__productName">{prodObj.productName}</h2>
          <p>Quantity : {prodObj.quantity}</p>
          <p className="product__price">Price : $ {prodObj.price}</p>
          <p>Maunfacturer : {prodObj.manufacturer}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
