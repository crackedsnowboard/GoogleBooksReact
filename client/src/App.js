import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Saved from "./pages/Saved"
import Search from "./pages/Search"
import API from "./utils/API"
import NoMatch from "./pages/NoMatch";
import { BookProvider } from "./utils/GlobalState"

function App() {

  return (
    <div className="container">
      <BookProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </BookProvider>
    </div>
  );
}


export default App;
