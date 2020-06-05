import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { products as productsSlice } from '../../slices/products';
import { loadProducts as loadProductsThunk } from '../../slices/thunks';
import ProductListItem from './ProductListItem';
import Preloader from '../Preloader';
import Header from '../Header';

export class ProductListView extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts({ type: '' });
  }

  render() {
    const { products, loadProducts, history } = this.props;
    const { items, loading, params } = products;

    if (loading) {
      return (
        <Preloader />
      )
    }

    return (
      <div className="list-view">
        <Header
          heading="Products"
          setSort={(column, direction) => loadProducts({ column, direction })}
          displaySort
          sortParams={params}
          groupByField=""
          setGroupBy={(groupBy) => history.push(`/${groupBy}`)}
        />
        <div className="list-group mt-2">
          {items.allIds.map((itemId) => <ProductListItem key={itemId} item={items.byId[itemId]} />)}
        </div>
      </div>
    );
  }
}

export const ProductListViewContainer = withRouter(
  connect((state) => ({
    products: state.products,
  }), { ...productsSlice.actions, ...{ loadProducts: loadProductsThunk } })(ProductListView),
);
