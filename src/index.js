import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import { ProductListViewContainer } from './components/ProductListView';
import { ProductItemContainer } from './components/ProductItem';

// create store
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);


// create routes
const routes = [
  <Route path="/" exact component={ProductListViewContainer} />,
  <Route path="/:itemid" exact component={ProductItemContainer} />,
];

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>{routes}</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#products-app'),
);
