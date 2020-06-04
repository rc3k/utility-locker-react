import { createSlice } from '@reduxjs/toolkit';

import { updateCollectionItems, groupArrayKeysByProperty } from './lib';
import { loadProducts, loadProductTypes } from './thunks';

export const productTypes = createSlice({
  name: 'producttypes',
  initialState: {
    items: {
      byId: {},
      allIds: [],
      productIdsByType: {},
    },
    key: 'key',
    params: {},
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [loadProductTypes.pending]: (state, action) => {
      state.loading = true;
      state.params = { ...state.params, ...action.meta.arg }
    },
    [loadProductTypes.fulfilled]: (state, action) => {
      state.items = { ...state.items, ...updateCollectionItems(state.items, action.payload, 'key') }
      state.loading = false;
    },
    [loadProducts.fulfilled]: (state, action) => {
      state.items.productIdsByType = { ...state.items.productIdsByType, ...groupArrayKeysByProperty(action.payload, 'type', 'id') }
    },
  },
});

export default productTypes;
