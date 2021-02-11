import { useState, useEffect } from "react";
import DataContext from "./context/DataContext";
import HomeView from "./views/HomeView";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DetailView from "./views/DetailView";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/json/database.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);
  document.title = "TekCamp Ecommerce Site";
  return (
    <Router>
      <Switch>
        <DataContext.Provider value={data}>
          <div className="App">
            <header className="App-header">
              <NavBar />
              <Route path="/" exact>
                <HomeView />
              </Route>
              <Route path="/product/:id">
                <DetailView />
              </Route>
            </header>
          </div>
        </DataContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
