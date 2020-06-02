import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/collection';

export class ProductListView extends React.Component {
  componentDidMount() {
    const { loadCollection } = this.props;
    loadCollection('products');
  }

  render() {
    const { items, meta } = this.props;

    if (meta.status === 'REQUESTED') {
      return (
        <div className="loader">Loading...</div>
      )
    }

    return (
      <div className="collection">
        <h1>{meta.collectionName}</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link to={`/${item.id}`}>{item.name}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export const ProductListViewContainer = withRouter(
  connect((state, ownProps) => ({
    items: state.products.items,
    meta: state.products.meta,
  }), actions)(ProductListView),
);
