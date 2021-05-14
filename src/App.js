import React from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import Navigation from "./components/navigation/Navigation";
import { transitions, types, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  type: types.SUCCESS
}

const App = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
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
    </AlertProvider>
  );
};

export default App;
