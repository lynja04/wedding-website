import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id={"body"}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
            </Switch>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
