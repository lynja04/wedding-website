import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import OurWeddingContainer from "./containers/OurWeddingContainer";
import Navigation from "./components/navigation/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <div id={"body"}>
          <Switch>
            <Route exact path={"/"} component={HomeContainer} />
            <Route
              exact
              path={"/our-wedding"}
              component={OurWeddingContainer}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
