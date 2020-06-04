import productTypesSlice from '../../slices/productTypes';
import { loadProductTypes, loadProducts } from '../../slices/thunks';

describe('product types slice', () => {
  it('should return the initial state', () => {
    expect(productTypesSlice.reducer(undefined, {})).toEqual({
      items: {
        byId: {},
        allIds: [],
        productIdsByType: {}
      },
      key: 'key',
      params: {},
      loading: false,
    });
  });
  it('should handle the loadProductTypes pending action', () => {
    expect(productTypesSlice.reducer(undefined, {
      'type': loadProductTypes.pending,
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
        productIdsByType: {}
      },
      key: 'key',
      params: {
        column: 'department',
        type: 'electrical',
      },
      loading: true,
    });
  });
  it('should handle the loadProductTypes fulfilled action', () => {
    expect(productTypesSlice.reducer(undefined, {
      'type': loadProductTypes.fulfilled,
      'payload': [
        {
          key: 'item-1',
          name: 'Item one'
        },
        {
          key: 'item-2',
          name: 'Item two'
        },
        {
          key: 'item-3',
          name: 'Item three'
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
            key: 'item-1',
            name: 'Item one',
          },
          'item-2': {
            key: 'item-2',
            name: 'Item two',
          },
          'item-3': {
            key: 'item-3',
            name: 'Item three',
          },
        },
        productIdsByType: {}
      },
      key: 'key',
      params: {},
      loading: false,
    });
  });
  it('should handle the loadProduct fulfilled action', () => {
    expect(productTypesSlice.reducer(undefined, {
      'type': loadProducts.fulfilled,
      'payload': [
        {
          id: 'item-1',
          name: 'Item one',
          type: 'electrical',
        },
        {
          id: 'item-2',
          name: 'Item two',
          type: 'electrical',
        },
        {
          id: 'item-3',
          name: 'Item three',
          type: 'book',
        }
      ]
    })).toEqual({
      items: {
        allIds: [],
        byId: {},
        productIdsByType: {
          electrical: ['item-1', 'item-2'],
          book: ['item-3',]
        }
      },
      key: 'key',
      params: {},
      loading: false,
    });
  });
});
