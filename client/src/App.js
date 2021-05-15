import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved"
import Nav from "../src/components/Nav";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Home />
          </Route>
          <Route exact path={["/books/:id", '/saved']}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
