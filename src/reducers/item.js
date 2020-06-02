import { SET_ITEM } from '../actions/item';
import { updateObject } from './lib';

const defaultState = {
  item: {
    fields: {
      name: '',
    },
    meta: {
      status: null,
    },
  },
};

const updateItemState = (state, fields, meta) => updateObject(state, {
  item: {
    fields,
    meta: updateObject(state.item.meta, meta),
  },
})

/**
 * item reducer
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
export default (state = {}, action = {}) => {
  switch (action.type) {
    case SET_ITEM:
      return updateItemState(
        state,
        action.meta.status === 'SUCCESS' ? action.payload : state.item,
        action.meta,
      );
    default:
      return updateObject(state, defaultState);
  }
};
