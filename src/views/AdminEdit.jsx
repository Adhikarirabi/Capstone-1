import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useHistory } from "react-router-dom";

const AdminEdit = () => {
  let params = useParams();
  let history = useHistory();
  const [id, setId] = useState(params.id);
  const [item, setItem] = useState({});
  let { data, setData } = useContext(DataContext);

  // these are the editable properties of the product
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let item = data.items[id - 1];
    console.log(id);
    console.log(data.items);
    setItem(item);

    setName(item.productName);
    setImgURL(item.imageURL);
    setDescription(item.description);
    setQuantity(item.quantity);
    setManufacturer(item.manufacturer);
    setPrice(item.price);
  }, [id]);

  const onSubmit = (e, serialID) => {
    e.preventDefault();
    let newData = { ...data };
    let editIndex = newData.items.findIndex(
      (item) => item.serialID === serialID
    );
    newData.items[editIndex].productName = name;
    newData.items[editIndex].imageURL = imgURL;
    newData.items[editIndex].quantity = Number(quantity);
    newData.items[editIndex].price = price;
    newData.items[editIndex].manufacturer = manufacturer;
    newData.items[editIndex].description = description;
    setData(newData);
    history.push(`/product/${editIndex + 1}`);
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
            onSubmit(e, item.serialID);
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
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminEdit;
