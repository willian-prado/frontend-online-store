import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, storeItems } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div>
        <Link to={ `/product-details/${id}` } data-testid="product-detail-link">
          <div data-testid="product">
            <h3>{ title }</h3>
            <div>
              <img src={ thumbnail } alt={ `${title}` } />
            </div>
            <p>
              { price }
            </p>
          </div>
        </Link>
        <div>
          <button
            type="button"
            onClick={ () => storeItems(product) }
            data-testid="product-add-to-cart"
          >
            {' '}
            Adicionar ao Carrinho
            {' '}

          </button>
        </div>
      </div>
    );
  }
}

ProductCard.defaultProps = {
  storeItems: undefined,
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  storeItems: PropTypes.func,
};
export default ProductCard;
