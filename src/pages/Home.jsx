import React, { Component } from 'react';
import ButtonCart from '../Components/ButtonCart';
import Categories from '../Components/Categories';
import ProductList from '../Components/ProductList';
import Input from '../Components/Input';
import * as productsAPI from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.fetchProductByText();
  }

  async fetchProductByText() {
    const { searchText } = this.state;
    const { results: products } = await productsAPI
      .getProductsFromCategoryAndQuery('', searchText);
    this.setState({
      products,
    });
  }

  render() {
    const { searchText, products } = this.state;
    return (
      <div>
        <ButtonCart />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <Categories />
        <Input
          value={ searchText }
          name="searchText"
          type="text"
          id="query-input"
          datatestid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <ProductList { ...{ products } } />
      </div>
    );
  }
}

export default Home;
