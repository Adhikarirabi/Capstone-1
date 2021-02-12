import { useState, useEffect } from "react";
import DataContext from "./context/DataContext";
import HomeView from "./views/HomeView";
import CartView from "./views/CartView";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DetailView from "./views/DetailView";
import CartContext from "./context/CartContext";
import useLocalStorage from "./customHooks/useLocalStorage";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [cart, setCart] = useLocalStorage("cart", []);

  useEffect(() => {
    fetch("/json/database.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);

  const addToCart = (prodObj) => {
    let newCart = [...cart];
    let objIndex = cart.findIndex((cartItem) => cartItem.prodObj === prodObj);
    if (objIndex === -1) {
      objIndex = { prodObj, quantity: 1 };
      newCart.push(objIndex);
    } else {
      newCart[objIndex].quantity++;
    }
    setCart(newCart);
  };

  const updateCartItem = (prodObj, value) => {
    let newCart = [...cart];
    let objIndex = cart.findIndex((cartItem) => cartItem.prodObj === prodObj);
    if (objIndex !== 1) {
      newCart[objIndex].quantity = value;
      setCart(newCart);
    }
  };

  const removeFromCart = (prodObj) => {
    let newCart = [...cart];
    setCart(newCart.filter((cartItem) => cartItem.prodObj !== prodObj));
  };

  const clearCart = () => {
    setCart([]);
  };

  document.title = "TekCamp Ecommerce Site";
  return (
    <Router>
      <Switch>
        <DataContext.Provider value={data}>
          <CartContext.Provider
            value={{
              cart,
              removeFromCart,
              addToCart,
              clearCart,
              updateCartItem,
            }}
          >
            <div className="App">
              <header className="App-header">
                <NavBar />
                <Route path="/" exact>
                  <HomeView />
                </Route>
                <Route path="/product/:id" component={DetailView}></Route>
                <Route path="/cart">
                  <CartView />
                </Route>
              </header>
            </div>
          </CartContext.Provider>
        </DataContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
