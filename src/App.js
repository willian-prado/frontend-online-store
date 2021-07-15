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
      cartItems: [],
    };
    this.renderAddButtonCart = this.renderAddButtonCart.bind(this);
    // this.addItemToCart = this.addItemToCart.bind(this);
    this.getItemsFromStorage = this.getItemsFromStorage.bind(this);
    this.storeItems = this.storeItems.bind(this);
  }

  // Requisito 8 - funcao q veio do Home

  getItemsFromStorage() {
    if (localStorage.getItem('ItemCart')) {
      let actualStorage = localStorage.getItem('ItemCart');
      actualStorage = JSON.parse(actualStorage);
      this.setState({
        cartItems: [...actualStorage],
      });
    } else {
      this.setState({
        cartItems: undefined,
      });
    }
  }

  storeItems(product) {
    if (localStorage.getItem('ItemCart') !== null) {
      let actualStorage = JSON.parse(localStorage.getItem('ItemCart'));
      actualStorage = [...actualStorage, product];
      localStorage.setItem('ItemCart', JSON.stringify(actualStorage));
    } else {
      localStorage.setItem('ItemCart', JSON.stringify([product]));
    }
  }

  // addItemToCart(product) {
  //   const { cartItems } = this.state;
  //   this.setState({
  //     cartItems: [...cartItems, product],
  //   });
  // }

  renderAddButtonCart(product) {
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => this.storeItems(product) }
      >
        Adicionar ao carrinho
      </button>
    );
  }

  render() {
    const { cartItems } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/product-details/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              cartItems={ cartItems }
              renderAddButtonCart={ this.renderAddButtonCart }
              storeItems={ this.storeItems }
            />) }
          />
          <Route
            exact
            path="/shopping-cart"
            render={ (props) => (<Cart
              { ...props }
              cartItems={ cartItems }
              getItemsFromStorage={ this.getItemsFromStorage }
            />) }
          />
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              storeItems={ this.storeItems }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
