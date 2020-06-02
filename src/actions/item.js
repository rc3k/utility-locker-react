import { createAction } from './lib';
import { loadItemRequest } from '../requests';

export const SET_ITEM = 'SET_ITEM';

export const [
  setItem,
] = [SET_ITEM].map(createAction);

export const loadItem = (collectionName, itemId) => async (dispatch) => {
  dispatch(setItem({
    id: itemId,
  }, {
    status: 'REQUESTED',
  }, false));

  try {
    const response = await loadItemRequest(collectionName, itemId);

    dispatch(setItem(response, {
      status: 'SUCCESS',
    }, false));
  } catch (error) {
    dispatch(setItem(error, {
      status: 'FAILURE',
    }, true));
  }
}
