import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import CartItem from '../Components/CartItem';

export default class Checkout extends Component {
  componentDidMount() {
    const { getItemsFromStorage } = this.props;
    getItemsFromStorage();
  }

  render() {
    const { cartItems, storeItems, getItemsFromStorage } = this.props;
    return (
      <div>
        <Link to="shopping-cart"><RiShoppingCartLine /></Link>
        <Link to="/"><AiOutlineHome /></Link>
        <section>
          <div>
            {cartItems.map((item) => (<CartItem
              key={ item.id }
              title={ item.title }
              image={ item.thumbnail }
              price={ item.price }
              quantity={ item.quantity }
              product={ item }
              storeItems={ storeItems }
              getItemsFromStorage={ getItemsFromStorage }
            />))}
          </div>
          <form>
            <label htmlFor="checkout-fullname">
              Nome Completo
              <input data-testid="checkout-fullname" id="checkout-fullname" type="text" />
            </label>
            <label htmlFor="checkout-email">
              Email
              <input data-testid="checkout-email" id="checkout-email" type="password" />
            </label>
            <label htmlFor="checkout-phone">
              Telefone
              <input data-testid="checkout-phone" id="checkout-phone" type="text" />
            </label>
            <label htmlFor="checkout-cpf">
              CPF
              <input data-testid="checkout-cpf" id="checkout-cpf" type="text" />
            </label>
            <label htmlFor="checkout-cep">
              CEP
              <input data-testid="checkout-cep" id="checkout-cep" type="text" />
            </label>
            <label htmlFor="checkout-address">
              Endereço
              <input data-testid="checkout-address" id="checkout-address" type="text" />
            </label>
          </form>
        </section>
      </div>

    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  storeItems: PropTypes.func.isRequired,
  getItemsFromStorage: PropTypes.func.isRequired,
};
