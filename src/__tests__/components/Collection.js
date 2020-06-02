import React from 'react';
import renderer from 'react-test-renderer';

import { BrowserRouter as Router } from 'react-router-dom';
import { Products } from '../../components/Products';

it('renders correctly when data is loading', () => {
  const collection = renderer.create(
    <Router>
      <Products
        meta={{
          status: 'REQUESTED',
        }}
        match={{
          params: {
            collection: 'users',
          },
        }}
        loadCollection={() => {
        }}
      />
    </Router>,
  ).toJSON();
  expect(collection).toMatchSnapshot();
});

it('renders correctly when items have loaded', () => {
  const collection = renderer.create(
    <Router>
      <Products
        items={[
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
        ]}
        meta={{
          status: 'SUCCESS',
        }}
        match={{
          params: {
            collection: 'users',
          },
        }}
        loadCollection={() => {
        }}
      />
    </Router>,
  ).toJSON();
  expect(collection).toMatchSnapshot();
});
