import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "../context/DataContext";

const AdminAdd = () => {
  const [id, setId] = useState(0);
  const [item, setItem] = useState({});
  let { data, setData } = useContext(DataContext);
  let history = useHistory();

  // these are the editable properties of the product
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    let newData = { ...data };
    let newItem = {};
    let newIndex = data.items.length + 1;
    newItem.serialID = newIndex;
    newItem.productName = name;
    newItem.imageURL = imgURL;
    newItem.quantity = Number(quantity);
    newItem.price = price;
    newItem.manufacturer = manufacturer;
    newItem.description = description;
    data.items.push(newItem);
    setData(newData);
    history.push(`/product/${newIndex}`);
  };
  return (
    <>
      <div className="form-wrapper">
        <h1>Edit {item.productName}</h1>
        <section className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
        <form
          className="adminEditForm"
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="form-group">
            <p>
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <label>Image URL or Link to file</label>
              <br />
              <input
                type="text"
                placeholder="Image URL"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
              />
            </p>
            <p>
              <label>Quantity (0 for out of stocks)</label>
              <br />
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </p>
            <p>
              <label>Manufacturer</label>
              <br />
              <input
                type="text"
                placeholder="Manufacturer  "
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              />
            </p>
            <p>
              <label>Price</label>
              <br />
              <input
                type="number"
                min="0"
                placeholder="price  "
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </p>
          </div>
          <div className="form-group">
            <p>
              <label>Description</label>
              <br />
              <textarea
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </p>
            <button type="submit" className="updateBtn">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminAdd;
