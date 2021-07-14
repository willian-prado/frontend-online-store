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
            <div data-testid="shopping-cart-product-name">
              { title }
            </div>
            <div>
              <img src={ thumbnail } alt={ `${title}` } />
            </div>
            <div>
              { price }
            </div>
          </div>
          <p data-testid="shopping-cart-product-quantity">1</p>
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
