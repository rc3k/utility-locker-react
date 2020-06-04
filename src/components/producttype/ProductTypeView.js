import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { productTypes } from '../../slices/productTypes';
import { loadProducts, loadProductTypes, toggleAccordionAndLoad } from '../../slices/thunks';
import { ui } from '../../slices/ui';
import Preloader from "../Preloader";
import ProductTypeItem from "./ProductTypeItem";
import Header from "../Header";

export class ProductTypeView extends React.Component {
  componentDidMount() {
    const { loadProductTypes } = this.props;
    loadProductTypes();
  }

  render() {
    const { products, loadProducts, productTypes, openTypes, history, toggleAccordionAndLoad } = this.props;
    const { items, loading, params } = productTypes;

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
          setGroupBy={groupBy => history.push(`/${groupBy}`)}
        />
        <div className="list-group">
          {items.allIds.map(itemId => (
            <ProductTypeItem
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
  connect((state, ownProps) => ({
    products: state.products,
    productTypes: state.productTypes,
    openTypes: state.ui.accordion.productTypes,
  }), { ...productTypes.actions, ...ui.actions, ...{ loadProductTypes, loadProducts, toggleAccordionAndLoad } })(ProductTypeView),
);
