import axios from 'axios';

export const loadCollectionRequest = async (collectionName) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/${collectionName}/`);
  return response.data;
};

export const loadItemRequest = async (collectionName, itemId) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/${collectionName}/`);
  return response.data;
};
