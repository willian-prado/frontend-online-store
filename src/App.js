import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import './App.css';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
    };
    this.renderAddButtonCart = this.renderAddButtonCart.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(product) {
    const { shoppingCart } = this.state;
    this.setState({
      shoppingCart: [...shoppingCart, product],
    });
  }

  renderAddButtonCart(product) {
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => this.addItemToCart(product) }
      >
        Adicionar ao carrinho
      </button>
    );
  }

  render() {
    const { shoppingCart } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/product-details/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              shoppingCart={ shoppingCart }
              renderAddButtonCart={ this.renderAddButtonCart }
            />) }
          />
          <Route
            exact
            path="/shopping-cart"
            render={ (props) => (<Cart
              { ...props }
              productList={ shoppingCart }
            />) }
          />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
