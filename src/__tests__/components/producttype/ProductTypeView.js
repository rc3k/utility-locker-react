import React from 'react';
import renderer from 'react-test-renderer';

import { BrowserRouter as Router } from 'react-router-dom';
import { ProductTypeView } from '../../../components/producttype/ProductTypeView';

it('renders correctly when data is loading', () => {
  const listView = renderer.create(
    <Router>
      <ProductTypeView
        productTypes={{ loading: true }}
        loadProductTypes={() => {}}
      />
    </Router>,
  ).toJSON();
  expect(listView).toMatchSnapshot();
});

it('renders correctly when items have loaded', () => {
  const listView = renderer.create(
    <Router>
      <ProductTypeView
        productTypes={{
          loading: false,
          items: {
            allIds: ['book', 'electrical'],
            byId: {
              book: {
                key: 'book',
                value: 'Book',
              },
              electrical: {
                key: 'electrical',
                value: 'Electrical',
              },
            },
            productIdsByType: {
              book: ['123-X'],
              electrical: ['123-Y'],
            },
          },
        }}
        products={
          {
            loading: false,
            items: {
              byId: {
                '123-X': {
                  id: '123-X',
                  name: 'Item one',
                  description: 'Item description',
                  weight: 123,
                  price: {
                    value: 156.98,
                  },
                  type: 'book',
                  type_name: 'Book',
                },
                '124-Y': {
                  id: '123-Y',
                  name: 'Item two',
                  description: 'Item description 2',
                  weight: 987,
                  price: {
                    value: 1.23,
                  },
                  type: 'electrical',
                  type_name: 'Electrical',
                },
              },
              allIds: ['123-X', '124-Y'],
            },
            params: {
              column: 'name',
              direction: 'asc',
            },
          }
        }
        loadProducts={() => {}}
        loadProductTypes={() => {}}
        openTypes={[]}
      />
    </Router>,
  ).toJSON();
  expect(listView).toMatchSnapshot();
});
