import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';

class ButtonCart extends Component {
  render() {
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <RiShoppingCartLine />

        </Link>
      </div>

    );
  }
}

export default ButtonCart;
