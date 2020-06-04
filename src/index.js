import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { ProductListViewContainer } from './components/product/ProductListView';
import { TypeViewContainer } from './components/producttype/ProductTypeView';
import { products } from './slices/products';
import { productTypes } from './slices/productTypes';
import { ui } from './slices/ui';

import './styles.css';

// create store
const store = configureStore({
  reducer: {
    products: products.reducer,
    productTypes: productTypes.reducer,
    ui: ui.reducer,
  },
  middleware: [thunk, ...getDefaultMiddleware()],
});

// create routes
const routes = [
  <Route path="/" exact component={ProductListViewContainer} key="main" />,
  <Route path="/type" exact component={TypeViewContainer} key="type" />,
];

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>{routes}</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#products-app'),
);
