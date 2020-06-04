import React from 'react';
import renderer from 'react-test-renderer';

import { BrowserRouter as Router } from 'react-router-dom';
import { ProductListView } from '../../../components/product/ProductListView';

it('renders correctly when data is loading', () => {
  const listView = renderer.create(
    <Router>
      <ProductListView
        products={{loading: true}}
        loadProducts={() => {}}
      />
    </Router>,
  ).toJSON();
  expect(listView).toMatchSnapshot();
});

it('renders correctly when items have loaded', () => {

  const listView = renderer.create(
    <Router>
      <ProductListView
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
                    value: 156.98
                  },
                  type_name: 'Book',
                },
                '124-Y': {
                  id: '123-Y',
                  name: 'Item two',
                  description: 'Item description 2',
                  weight: 987,
                  price: {
                    value: 1.23
                  },
                  type_name: 'Electrical',
                },
              },
              allIds: ['123-X', '124-Y',],
            },
            params: {
              column: 'name',
              direction: 'asc'
            },
          }
        }
        loadProducts={() => {}}
      />
    </Router>,
  ).toJSON();
  expect(listView).toMatchSnapshot();
});
