import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import * as api from '../services/api';

class Categories extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     categories: [],
  //   };
  // }

  // componentDidMount() {
  //   this.fetchCategories();
  // }

  // fetchCategories = async () => {
  //   const { getCategories } = api;
  //   const requestReturn = await getCategories();
  //   this.setState({
  //     categories: [...requestReturn],
  //   });
  // }

  render() {
    const { categories } = this.props;
    const { setProductsCategory } = this.props;
    return (
      <ol>
        {categories.map(({ id, name }) => (
          <li
            key={ id }
            category={ name }
            data-testid="category"
          >
            <button
              value={ id }
              type="button"
              onClick={ (event) => setProductsCategory(event.target.value) }
              // console.log(event.target.value)
              // setProductsCategory(event.target.value)
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
