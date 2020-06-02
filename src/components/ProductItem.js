import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/item';

export class ProductItem extends React.Component {
  componentDidMount() {
    const { loadItem, match } = this.props;
    const { itemid } = match.params;
    if (itemid) {
      loadItem('products', itemid);
    }
  }

  render() {
    const { fields, meta, history } = this.props;
    if (meta.status === 'REQUESTED') {
      return (
        <div className="loader">Loading...</div>
      )
    }
    return (
      <div className="item">
        <h1>{fields.name}</h1>
        <p>A stub for an item view</p>
        <input type="button" onClick={() => history.push('/')} value="Go Back" />
      </div>
    );
  }
}

export const ProductItemContainer = withRouter(
  connect(
    (state) => ({
      fields: state.item.fields,
      meta: state.item.meta,
    }),
    actions,
  )(ProductItem),
);
