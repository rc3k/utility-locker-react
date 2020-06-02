import { SET_COLLECTION,  } from '../actions/collection';
import { updateObject } from './lib';

const defaultState = {
  products: {
    items: [],
    meta: {
      collectionName: 'products',
      state: null,
      key: 'id',
    },
  },
};

const updateCollectionState = (state, items, meta) => updateObject(state, {
  [meta.collectionName]: {
    items,
    meta: updateObject(state[meta.collectionName].meta, meta),
  },
})

const setCollection = (state, payload, meta) => {
  const isSuccess = meta.status === 'SUCCESS';
  return updateCollectionState(
    state,
    isSuccess ? payload : state[meta.collectionName].items,
    meta,
  );
}

/**
 * collection reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_COLLECTION:
      return setCollection(state, action.payload, action.meta);
    default:
      return updateObject(state, defaultState);
  }
};
