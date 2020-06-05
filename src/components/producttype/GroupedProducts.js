import React from 'react';

import ProductListItem from '../product/ProductListItem';
import SortBySelect from '../SortBySelect';

export default ({
  item, products, productIds, loadProducts, typeParams,
}) => (
  <div>
    {productIds[item.key].length > 1 ? (
      <div className="row">
        <div className="col-md-6 offset-md-6">
          <SortBySelect
            column={typeParams[item.key].column}
            direction={typeParams[item.key].direction}
            setSort={(column, direction) => loadProducts({ column, direction, type: item.key })}
          />
        </div>
      </div>
    ) : null}
    <div className="p-4">
      {productIds[item.key].map((itemId) => (
        <ProductListItem
          key={itemId}
          item={products[itemId]}
        />
      ))}
    </div>
  </div>
);
