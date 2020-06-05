import React from 'react';
import { CSSTransition } from 'react-transition-group';

import GroupedProducts from './GroupedProducts';

export default ({
  item, toggleAccordionItemOpen, isOpen, products, productIds, loadProducts, typeParams,
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
            <GroupedProducts
              item={item}
              products={products}
              productIds={productIds}
              loadProducts={loadProducts}
              typeParams={typeParams}
            />
          )
          : <div />}
      </div>
    </CSSTransition>
  </div>
);
