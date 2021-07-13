import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import './App.css';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/product-details" component={ ProductDetails } />
          <Route exact path="/shopping-cart" component={ Cart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
