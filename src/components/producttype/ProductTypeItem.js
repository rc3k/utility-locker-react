import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import ProductListItem from '../product/ProductListItem';

export default ({ item, toggleAccordionItemOpen, isOpen, products, productIds}) => (
  <div className="product-type-item card mb-3">
    <div
      className="card-header justify-content-between d-flex"
      onClick={() => toggleAccordionItemOpen({
        name: 'productTypes',
        itemId: item.key
      })}
    >
      <span>{item.value}</span>
      <span>{!isOpen ? '+' : '-'}</span>
    </div>
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames="product-transition"
    >
      <div className="container">
        {productIds.hasOwnProperty(item.key) && isOpen ?
          <div className="p-4">
            {productIds[item.key].map(itemId => (
              <ProductListItem
                key={itemId}
                item={products[itemId]}
              />
            ))}
          </div>
          : <div />}
      </div>
    </CSSTransition>
  </div>
);