import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

        fetchCategories = async () => {
          const { getCategories } = api;
          const requestReturn = await getCategories();
          this.setState({
            categories: [...requestReturn],
          });
        }

        render() {
          const { categories } = this.state;
          return (
            <ol>
              {categories.map(({ id, name }) => (
                <li
                  key={ id }
                  category={ name }
                  data-testid="category"
                >
                  {name}
                </li>))}
            </ol>
          );
        }
}

export default Categories;
