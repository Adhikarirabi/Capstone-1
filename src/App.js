import { useEffect } from "react";
import DataContext from "./context/DataContext";
import CartContext from "./context/CartContext";

import HomeView from "./views/HomeView";
import CartView from "./views/CartView";
import AdminView from "./views/AdminView";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import DetailView from "./views/DetailView";
import AdminEdit from "./views/AdminEdit";
import AdminAdd from "./views/AdminAdd";

import useLocalStorage from "./customHooks/useLocalStorage";

import "./App.css";

function App() {
  const [data, setData] = useLocalStorage("data", {});
  const [cart, setCart] = useLocalStorage("cart", []);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);

  const getDataFromDb = () => {
    if (data.items === undefined || !data) {
      fetch("/json/database.json")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err.message));
    }
  };
  useEffect(getDataFromDb, []);

  const editData = (prodObjProvided, value = 1) => {
    let objIndex = data.items.findIndex(
      (prodObj) => prodObj.serialID === prodObjProvided.serialID
    );
    let newData = { ...data };
    newData.items[objIndex].quantity += Number(value);
    setData(newData);
  };

  const addToCart = (prodObj) => {
    let newCart = [...cart];
    let objIndex = cart.findIndex(
      (cartItem) => cartItem.prodObj.serialID === prodObj.serialID
    );
    if (objIndex === -1) {
      objIndex = { prodObj, quantity: 1 };
      newCart.push(objIndex);
      editData(prodObj, -1);
    } else {
      editData(prodObj, -1);
      newCart[objIndex].quantity++;
    }
    setCart(newCart);
  };

  const updateCartItem = (prodObj, value) => {
    let newCart = [...cart];
    let objIndex = cart.findIndex(
      (cartItem) => cartItem.prodObj.serialID === prodObj.serialID
    );
    let product = data.items.find((item) => item.serialID === prodObj.serialID);

    if (objIndex !== -1) {
      if (
        (newCart[objIndex].quantity > 0 || value > 0) &&
        (product.quantity > 0 || value < 0)
      ) {
        newCart[objIndex].prodObj.quantity = product.quantity;
        newCart[objIndex].quantity += value;

        setCart(newCart);
        editData(product, -value);
      }
    }
  };

  const removeFromCart = (prodObj) => {
    let newCart = [...cart];
    let objToBeDeleted = newCart.find(
      (cartItem) => cartItem.prodObj.serialID === prodObj.serialID
    );
    console.log(objToBeDeleted);
    setCart(newCart.filter((cartItem) => cartItem !== objToBeDeleted));
    editData(objToBeDeleted.prodObj, objToBeDeleted.quantity);
  };

  const clearCart = () => {
    setCart([]);
  };

  document.title = "TekCamp Ecommerce Site";
  return (
    <Router>
      <Switch>
        <DataContext.Provider value={{ data, setData, getDataFromDb }}>
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

                <Route exact path="/cart">
                  <CartView />
                </Route>

                {/* admin parrt here */}
                <Route path="/admin" exact>
                  <AdminView
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                </Route>
                {isLoggedIn ? (
                  <>
                    <Route path="/product/:id" component={DetailView}></Route>
                    <Route path="/admin/:id/edit" component={AdminEdit}></Route>
                    <Route path="/admin/item/add" component={AdminAdd}></Route>
                  </>
                ) : (
                  <Redirect path="/admin" />
                )}
              </header>
            </div>
          </CartContext.Provider>
        </DataContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
