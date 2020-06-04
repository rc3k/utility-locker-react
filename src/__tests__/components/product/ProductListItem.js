import React from 'react';
import renderer from 'react-test-renderer';

import ProductListItem from '../../../components/product/ProductListItem';

it('renders a single item correctly', () => {

  const item = renderer.create(
      <ProductListItem
        item={{
          id: '123-X',
          name: 'Item one',
          description: 'Item description',
          weight: 123,
          price: {
            value: 156.98
          },
          type_name: 'Book',
        }}
      />
  ).toJSON();
  expect(item).toMatchSnapshot();
});
