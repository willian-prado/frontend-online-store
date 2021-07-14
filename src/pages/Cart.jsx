import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import ProductCard from '../Components/ProductCard';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: undefined,
    };
    this.getItemsFromStorage = this.getItemsFromStorage.bind(this);
    this.removeItemFromStorage = this.removeItemFromStorage.bind(this);
  }

  componentDidMount() {
    this.getItemsFromStorage();
  }

  getItemsFromStorage() {
    if (localStorage.getItem('ItemCart')) {
      let actualStorage = localStorage.getItem('ItemCart');
      actualStorage = JSON.parse(actualStorage);
      this.setState({
        cartItems: [...actualStorage],
      });
    }
  }

  removeItemFromStorage() {
    localStorage.removeItem('ItemCart');
    this.setState({
      cartItems: undefined,
    });
  }

  render() {
    const { cartItems } = this.state;
    if (cartItems !== undefined) {
      return (
        <div>
          <Link to="/"><AiOutlineHome /></Link>
          <div>
            <button
              type="button"
              onClick={ this.removeItemFromStorage }
            >
              Limpar Items

            </button>
            {cartItems.map((item) => (<ProductCard
              key={ item.id }
              title={ item.title }
              product={ item }
            />))}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/"><AiOutlineHome /></Link>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default Cart;
