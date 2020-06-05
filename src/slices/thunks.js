import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadCollectionRequest } from '../requests';

import { ui } from './ui';

export const loadProducts = createAsyncThunk(
  'products/load',
  async (params = {}, thunkAPI) => {
    const requestParams = { ...thunkAPI.getState().products.params, ...params }
    return loadCollectionRequest('products', requestParams);
  },
)

export const loadProductTypes = createAsyncThunk(
  'producttypes/load',
  async (params = {}, thunkAPI) => {
    const requestParams = { ...thunkAPI.getState().products.params, ...params }
    return loadCollectionRequest('producttypes', requestParams);
  },
)

export const loadProductsByType = createAsyncThunk(
  'productsbytype/load',
  async (params = {}, thunkAPI) => {
    const requestParams = { ...thunkAPI.getState().products.params, ...params }
    return loadCollectionRequest('products', requestParams);
  },
)

export const toggleAccordionAndLoad = createAsyncThunk(
  'accordion/load',
  async (payload = {}, thunkAPI) => {
    if (!thunkAPI.getState().ui.accordion[payload.name].includes(payload.itemId)) {
      thunkAPI.dispatch(loadProductsByType({
        type: payload.itemId,
      }));
    }
    thunkAPI.dispatch(ui.actions.toggleAccordionItemOpen(payload));
  },
)
