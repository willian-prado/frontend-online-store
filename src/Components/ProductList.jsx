import React from 'react';
import PropTypes from 'prop-types';
import * as productsAPI from '../services/api';
import ProductCard from './ProductCard';
import NotFound from './NotFound';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.fetchProductByText();
  }

  async fetchProductByText() {
    const { searchText } = this.props;
    const { results: products } = await productsAPI
      .getProductsFromCategoryAndQuery('', searchText);
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    const productList = (
      <div>
        { products.map((p) => <ProductCard key={ p.id } product={ p } />) }
      </div>
    );
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        { (!products.length) ? <NotFound /> : productList }
      </div>
    );
  }
}

ProductList.propTypes = {
  searchText: PropTypes.string.isRequired,
};
