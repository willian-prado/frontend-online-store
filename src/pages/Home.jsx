import React, { Component } from 'react';
import ButtonCart from '../Components/ButtonCart';

class Home extends Component {
  render() {
    return (
      <div>
        <ButtonCart />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </div>
    );
  }
}

export default Home;
