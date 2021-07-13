import React, { Component } from 'react';
import ButtonCart from '../Components/ButtonCart';
import Categories from '../Components/Categories';
import ProductList from '../Components/ProductList';
import Input from '../Components/Input';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText } = this.state;
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
        <ProductList searchText={ searchText } />
      </div>
    );
  }
}

export default Home;
