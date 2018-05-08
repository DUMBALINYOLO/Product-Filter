import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from './Product';
import { fetchData } from '../../actions/index';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData(1));
  }

  render() {
    const { count, products } = this.props;
    console.log(products);
    return (
      <Fragment>
        <h1>{count}</h1>
        {products.map(product => (
          <Product key={product.pk} product={product} />
        ))}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.result.count,
    products: state.result.products,
  };
}

ProductsContainer.propTypes = {
  count: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    pk: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    brand: PropTypes.string,
    color: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ProductsContainer);
