import productsSlice from '../../slices/products';
import { loadProducts } from '../../slices/thunks';

describe('products slice', () => {
  it('should return the initial state', () => {
    expect(productsSlice.reducer(undefined, {})).toEqual({
      items: {
        byId: {},
        allIds: [],
      },
      key: 'id',
      params: {
        column: 'name',
        direction: 'asc',
      },
      loading: false,
    });
  });
  it('should handle the loadProducts pending action', () => {
    expect(productsSlice.reducer(undefined, {
      'type': loadProducts.pending,
      'meta': {
        arg: {
          column: 'department',
          type: 'electrical',
        }
      }
    })).toEqual({
      items: {
        byId: {},
        allIds: [],
      },
      key: 'id',
      params: {
        direction: 'asc',
        column: 'department',
        type: 'electrical',
      },
      loading: true,
    });
  });
  it('should handle the loadProducts fulfilled action', () => {
    expect(productsSlice.reducer(undefined, {
      'type': loadProducts.fulfilled,
      'payload': [
        {
          'id': 'item-1',
          'name': 'Item one'
        },
        {
          'id': 'item-2',
          'name': 'Item two'
        },
        {
          'id': 'item-3',
          'name': 'Item three'
        }
      ]
    })).toEqual({
      items: {
        allIds: [
          'item-1',
          'item-2',
          'item-3',
        ],
        byId: {
          'item-1': {
            id: 'item-1',
            name: 'Item one',
          },
          'item-2': {
            id: 'item-2',
            name: 'Item two',
          },
          'item-3': {
            id: 'item-3',
            name: 'Item three',
          },
        },
      },
      key: 'id',
      params: {
        column: 'name',
        direction: 'asc',
      },
      loading: false,
    });
  });
});
