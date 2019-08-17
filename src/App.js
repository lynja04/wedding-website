import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Navigation from "./components/navigation/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <div id={"body"}>
          <Switch>
            <Route exact path={"/"} component={HomeContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
