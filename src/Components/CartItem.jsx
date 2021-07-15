import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { title, image, price, quantity } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ image } alt={ title } />
        <h3>{ `preço: R$ ${price}` }</h3>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
