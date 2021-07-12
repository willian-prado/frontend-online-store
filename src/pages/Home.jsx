import React, { Component } from 'react';
import ButtonCart from '../Components/ButtonCart';
import Categories from '../Components/Categories';

class Home extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <ButtonCart />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <Categories />
      </div>
    );
  }
}

export default Home;
