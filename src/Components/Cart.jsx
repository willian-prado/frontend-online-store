import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { productList } = this.props;

    return (
      <div>
        <Link to="/"><AiOutlineHome /></Link>

        {productList.map((product) => {
          const { name, id /*  price  */ } = product;
          console.log(name, 'entrou');
          return (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{name}</h3>
              <p data-testid="shopping-cart-product-quantity" />
            </div>
          );
        })}
      </div>
    );
  }
}

Cart.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cart;
