import { createAction } from './lib';
import { loadCollectionRequest } from '../requests';

export const SET_COLLECTION = 'SET_COLLECTION';

export const [
  setCollection,
] = [SET_COLLECTION].map(createAction);

export const loadCollection = (collectionName) => async (dispatch) => {
  dispatch(setCollection([], {
    collectionName,
    status: 'REQUESTED',
  }, false));
  try {
    const response = await loadCollectionRequest(collectionName);

    dispatch(setCollection(response, {
      collectionName,
      status: 'SUCCESS',
    }, false));
  } catch (error) {
    dispatch(setCollection(error, {
      collectionName,
      status: 'FAILURE',
    }, true));
  }
}
