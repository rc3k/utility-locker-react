import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { productTypes as productTypesSlice } from '../../slices/productTypes';
import * as thunks from '../../slices/thunks';
import { ui } from '../../slices/ui';
import Preloader from '../Preloader';
import ProductTypeItem from './ProductTypeItem';
import Header from '../Header';

export class ProductTypeView extends React.Component {
  componentDidMount() {
    const { loadProductTypes } = this.props;
    loadProductTypes();
  }

  render() {
    const {
      products, loadProducts, productTypes, openTypes, history, toggleAccordionAndLoad,
    } = this.props;
    const { items, loading } = productTypes;

    if (loading) {
      return (
        <Preloader />
      )
    }

    return (
      <div className="list-view">
        <Header
          heading="Product types"
          setSort={(column, direction) => loadProducts({ column, direction })}
          sortParams={products.params}
          groupByField="type"
          setGroupBy={(groupBy) => history.push(`/${groupBy}`)}
        />
        <div className="list-group">
          {items.allIds.map((itemId) => (
            <ProductTypeItem
              key={itemId}
              item={items.byId[itemId]}
              isOpen={openTypes.includes(itemId)}
              toggleAccordionItemOpen={toggleAccordionAndLoad}
              productIds={items.productIdsByType}
              products={products.items.byId}
            />
          ))}
        </div>
      </div>
    );
  }
}

export const TypeViewContainer = withRouter(
  connect((state) => ({
    products: state.products,
    productTypes: state.productTypes,
    openTypes: state.ui.accordion.productTypes,
  }), { ...productTypesSlice.actions, ...ui.actions, ...thunks })(ProductTypeView),
);
