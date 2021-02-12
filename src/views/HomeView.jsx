import React, { useContext, useEffect, useState } from "react";
import Searchbar from "../components/SearchBar";
import DataContext from "../context/DataContext";
import Product from "../components/Product";
import { useLocation } from "react-router-dom";

const HomeView = (props) => {
  let data = useContext(DataContext);
  let search = useLocation().search;
  let params = new URLSearchParams(search);

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState(params.get("name") || "");
  useEffect(() => {
    setItems(data.items);
  }, [data.items]);
  if (items) {
    return (
      <div className="homeviewWrapper">
        <Searchbar query={query} setQuery={setQuery} />
        <div className="product--Container">
          {items.filter((item) => {
            return (
              item.productName.toLowerCase().includes(query) ||
              item.manufacturer.toLowerCase().includes(query)
            );
          }).length ? (
            items
              .filter((item) => {
                return (
                  item.productName.toLowerCase().includes(query) ||
                  item.manufacturer.toLowerCase().includes(query)
                );
              })
              .map((prodObj) => (
                <Product key={prodObj.serialID} prodObj={prodObj} />
              ))
          ) : (
            <div className="error">
              <h2>Oops! No items found</h2>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    console.log(items);
    return <></>;
  }
};

export default HomeView;
