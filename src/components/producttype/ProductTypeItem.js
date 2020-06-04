import React from 'react';
import { CSSTransition } from 'react-transition-group';

import ProductListItem from '../product/ProductListItem';

export default ({
  item, toggleAccordionItemOpen, isOpen, products, productIds,
}) => (
  <div className="product-type-item card mb-3">
    <button
      type="button"
      onClick={() => toggleAccordionItemOpen({
        name: 'productTypes',
        itemId: item.key,
      })}
      className="accordion-toggle"
    >
      <div
        className="card-header justify-content-between d-flex"
      >
        <span>{item.value}</span>
        <span>{!isOpen ? '+' : '-'}</span>
      </div>
    </button>
    <CSSTransition
      in={isOpen}
      timeout={200}
      classNames="product-transition"
    >
      <div className="container">
        {item.key in productIds && isOpen
          ? (
            <div className="p-4">
              {productIds[item.key].map((itemId) => (
                <ProductListItem
                  key={itemId}
                  item={products[itemId]}
                />
              ))}
            </div>
          )
          : <div />}
      </div>
    </CSSTransition>
  </div>
);
