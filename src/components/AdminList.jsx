import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";

const AdminList = () => {
  let { data, setData, getDataFromDb } = useContext(DataContext);
  return (
    <>
      <div className="adminInfo">
        <h1>All Items</h1>
        <section className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <br />
        <Link to="/admin/item/add/">Add Product</Link>
        {"     "}
        <Link
          to="/"
          onClick={() => {
            localStorage.clear();
            getDataFromDb();
          }}
        >
          Clear All Data
        </Link>
      </div>

      <div className="adminListViewWrapper">
        {data.items.map((item) => (
          <div key={item.serialID} className="adminItem">
            <div className="CartItemContainer">
              <div className="productWrapper">
                <img
                  src={item.imageURL}
                  className="cartItemProductImage"
                  alt="product"
                />
                <div className="discription">
                  {item.serialID}
                  <h2 className="productName">{item.productName}</h2>${" "}
                  {item.price}
                  <br />
                  Quanity : {item.quantity}
                </div>
              </div>
              <div>
                <Link
                  className="editButton"
                  to={`/admin/${item.serialID}/edit`}
                >
                  <FaPencilAlt /> Edit
                </Link>
                <br></br>
                <Link
                  className="removeButton"
                  to={`/admin/${item.serialID}/delete`}
                >
                  <AiFillDelete /> Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
        <section className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>
    </>
  );
};

export default AdminList;
