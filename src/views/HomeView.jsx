import React from "react";
import Searchbar from "../components/SearchBar";
import DataContext from "../context/DataContext";
import Product from "../components/Product";

const HomeView = () => {
  return (
    <DataContext.Consumer>
      {(data) => {
        if (data.items) {
          return (
            <div>
              <Searchbar />
              <div className="product--Container">
                {data.items.map((prodObj) => (
                  <Product prodObj={prodObj} />
                ))}
              </div>
            </div>
          );
        } else {
          return <></>;
        }
      }}
    </DataContext.Consumer>
  );
};

export default HomeView;
