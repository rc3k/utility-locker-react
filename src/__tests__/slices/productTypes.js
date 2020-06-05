import productTypesSlice from '../../slices/productTypes';
import { loadProductTypes, loadProductsByType } from '../../slices/thunks';

describe('product types slice', () => {
  it('should return the initial state', () => {
    expect(productTypesSlice.reducer(undefined, {})).toEqual({
      items: {
        byId: {},
        allIds: [],
        productIdsByType: {},
      },
      key: 'key',
      params: {},
      typeParams: {},
      loading: false,
    });
  });
  it('should handle the loadProductTypes pending action', () => {
    expect(productTypesSlice.reducer(undefined, {
      type: loadProductTypes.pending,
      meta: {
        arg: {
          column: 'department',
          type: 'electrical',
        },
      },
    })).toEqual({
      items: {
        byId: {},
        allIds: [],
        productIdsByType: {},
      },
      key: 'key',
      params: {},
      typeParams: {},
      loading: true,
    });
  });
  it('should handle the loadProductTypes fulfilled action', () => {
    expect(productTypesSlice.reducer(undefined, {
      type: loadProductTypes.fulfilled,
      payload: [
        {
          key: 'item-1',
          name: 'Item one',
        },
        {
          key: 'item-2',
          name: 'Item two',
        },
        {
          key: 'item-3',
          name: 'Item three',
        },
      ],
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
        productIdsByType: {},
      },
      key: 'key',
      params: {},
      typeParams: {
        'item-1': {
          column: 'name',
          direction: 'asc',
        },
        'item-2': {
          column: 'name',
          direction: 'asc',
        },
        'item-3': {
          column: 'name',
          direction: 'asc',
        },
      },
      loading: false,
    });
  });

  it('should handle the loadProductsByType pending action', () => {
    expect(productTypesSlice.reducer(undefined, {
      type: loadProductsByType.pending,
      meta: {
        arg: {
          type: 'book',
          column: 'price',
          direction: 'desc',
        },
      },
    })).toEqual({
      items: {
        allIds: [],
        byId: {},
        productIdsByType: {},
      },
      key: 'key',
      params: {},
      loading: false,
      typeParams: {
        book: {
          type: 'book',
          column: 'price',
          direction: 'desc',
        },
      },

    });
  });
  it('should handle the loadProductsByType fulfilled action', () => {
    expect(productTypesSlice.reducer(undefined, {
      type: loadProductsByType.fulfilled,
      payload: [
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
      ],
    })).toEqual({
      items: {
        allIds: [],
        byId: {},
        productIdsByType: {
          electrical: ['item-1', 'item-2'],
        },
      },
      key: 'key',
      params: {},
      loading: false,
      typeParams: {},
    });
  });
});
