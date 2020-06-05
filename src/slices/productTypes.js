import { createSlice } from '@reduxjs/toolkit';

import { updateCollectionItems, groupArrayKeysByProperty } from './lib';
import { loadProductsByType, loadProductTypes } from './thunks';

export const productTypes = createSlice({
  name: 'producttypes',
  initialState: {
    items: {
      byId: {},
      allIds: [],
      productIdsByType: {},
    },
    typeParams: {},
    key: 'key',
    params: {},
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [loadProductTypes.pending]: (state) => {
      state.loading = true;
    },
    [loadProductTypes.fulfilled]: (state, action) => {
      state.items = { ...state.items, ...updateCollectionItems(state.items, action.payload, 'key') }
      action.payload.forEach((item) => {
        state.typeParams[item.key] = {
          column: 'name',
          direction: 'asc',
        }
      });
      state.loading = false;
    },
    [loadProductsByType.pending]: (state, action) => {
      const { type } = action.meta.arg;
      state.typeParams[type] = { ...state.typeParams[type], ...action.meta.arg }
    },
    [loadProductsByType.fulfilled]: (state, action) => {
      state.items.productIdsByType = { ...state.items.productIdsByType, ...groupArrayKeysByProperty(action.payload, 'type', 'id') }
    },
  },
});

export default productTypes;
