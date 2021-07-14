import React, { Component } from 'react';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } }} = this.props;

    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await response.json();
    this.setState({
      product: result,
    });
  }

  render() {
    const { product: { title } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
      </div>
    );
  }
}
