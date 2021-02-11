import { useState, useEffect } from "react";
import DataContext from "./context/DataContext";
import HomeView from "./views/HomeView";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/json/database.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <DataContext.Provider value={data}>
          <div className="App">
            <header className="App-header">
              <HomeView />
            </header>
          </div>
        </DataContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
