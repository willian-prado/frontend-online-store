import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
      pictures: [],
      picIndex: 0,
    };

    this.decreasePicIndex = this.decreasePicIndex.bind(this);
    this.increasePicIndex = this.increasePicIndex.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;

    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await response.json();
    this.setState({
      product: result,
      pictures: result.pictures,
    });
  }

  decreasePicIndex() {
    this.setState((prevState) => {
      const { picIndex, pictures } = prevState;
      if (picIndex === 0) return { picIndex: (pictures.length - 1) };
      return { picIndex: picIndex - 1 };
    });
  }

  increasePicIndex() {
    this.setState((prevState) => {
      const { picIndex, pictures } = prevState;
      if (picIndex === (pictures.length - 1)) {
        return { picIndex: 0 };
      }
      return { picIndex: picIndex + 1 };
    });
  }

  render() {
    const { product: { title }, pictures, picIndex } = this.state;
    return (
      <div>
        <Link to="/"><AiOutlineHome /></Link>
        <h3 data-testid="product-detail-name">{ title }</h3>
        {pictures.length && <img src={ pictures[picIndex].url } alt={ title } />}
        <div>
          <button type="button" onClick={ this.decreasePicIndex }>
            <AiOutlineCaretLeft />
          </button>
          <button type="button" onClick={ this.increasePicIndex }>
            <AiOutlineCaretRight />
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
