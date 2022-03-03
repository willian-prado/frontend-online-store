import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    const { setProductsCategory } = this.props;
    return (
      <ol>
        {categories.map(({ id, name }) => (
          <li
            key={ id }
            category={ name }
          >
            <button
              data-testid="category"
              value={ id }
              type="button"
              onClick={ (event) => setProductsCategory(event.target.value) }
            >
              { name }
            </button>
          </li>))}
      </ol>
    );
  }
}

export default Categories;

Categories.propTypes = {
  setProductsCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
