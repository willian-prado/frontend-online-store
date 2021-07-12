import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

class Cart extends Component {
  render() {
    return (
      <div>
        <Link to="/"><AiOutlineHome /></Link>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default Cart;
