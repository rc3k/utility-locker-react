import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadCollectionRequest } from "../requests";

import { ui } from './ui';

export const loadProducts = createAsyncThunk(
  'products/load',
  async (params= {}, thunkAPI) => {
    const requestParams = { ...thunkAPI.getState().products.params, ...params }
    return await loadCollectionRequest('products', requestParams);
  }
)

export const loadProductTypes = createAsyncThunk(
  'producttypes/load',
  async (params= {}, thunkAPI) => {
    const requestParams = { ...thunkAPI.getState().products.params, ...params }
    return await loadCollectionRequest('producttypes', requestParams);
  }
)

export const toggleAccordionAndLoad = createAsyncThunk(
  'accordion/load',
  async (payload= {}, thunkAPI) => {
    if (!thunkAPI.getState().ui.accordion[payload.name].includes(payload.itemId)) {
      thunkAPI.dispatch(loadProducts({
        type: payload.itemId,
      }));
    }
    thunkAPI.dispatch(ui.actions.toggleAccordionItemOpen(payload));
  }
)
