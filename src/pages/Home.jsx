import React, { Component } from 'react';
import ButtonCart from '../Components/ButtonCart';
import * as api from '../services/api';

class Home extends Component {
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
    console.log(api);
    const requestReturn = await getCategories();
    console.log(requestReturn);
    this.setState({
      categories: [...requestReturn],
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ButtonCart />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
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
      </div>
    );
  }
}

export default Home;
