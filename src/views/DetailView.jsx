import React, { useEffect, useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

const DetailView = () => {
  let params = useParams();
  const [id, setID] = useState(params.id);
  useEffect(() => {
    setID(params.id);
    window.scrollTo(0, 0);
  }, [params.id, id]);

  let { data } = useContext(DataContext);

  if (data.items) {
    let itemObj = data.items.find((item) => item.serialID == id);
    let suggestions = data.items.filter(
      (item) =>
        item.manufacturer === itemObj.manufacturer &&
        item.serialID !== itemObj.serialID
    );
    document.title = itemObj.productName;
    return (
      <>
        <div className="detailView-Wrapper">
          <img src={itemObj.imageURL} className="productImage" alt="product" />
          <div className="textIntro">
            <h1 className="title">{itemObj.productName}</h1>
            <section className="circles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </section>

            <span className="manufacturers">{itemObj.manufacturer}</span>
            <div className="description">{itemObj.description}</div>
          </div>
          <div className="suggestions">
            <h2>More from {itemObj.manufacturer}</h2>
            <br />
            {suggestions.length > 0 ? (
              <div className="suggestionsContainer">
                {suggestions.map((prodObj) => (
                  <Product key={prodObj.serialID} prodObj={prodObj} />
                ))}
              </div>
            ) : (
              `No other products from ${itemObj.manufacturer}`
            )}
          </div>
        </div>
      </>
    );
  }
};

export default DetailView;
