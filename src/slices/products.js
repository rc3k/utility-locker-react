import { createSlice } from '@reduxjs/toolkit';

import { updateCollectionItems } from './lib';
import { loadProducts } from './thunks';


export const products = createSlice({
  name: 'products',
  initialState: {
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
  },
  reducers: {},
  extraReducers: {
    [loadProducts.pending]: (state, action) => {
      state.loading = true;
      state.params = { ...state.params, ...action.meta.arg }
    },
    [loadProducts.fulfilled]: (state, action) => {
      state.items = { ...state.items, ...updateCollectionItems(state.items, action.payload, state.key) }
      state.loading = false;
    }
  }
});

export default products;
