import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import SignIn from "./components/auth/SignIn";
import Home from "./components/layout/home";

class App extends Component {
  pageNotFound() {
    return <div>Page not found</div>;
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SignIn} />
            <Route component={this.pageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
