import axios from 'axios';
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false
});

export const loadCollectionRequest = async (collectionName) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/${collectionName}/`, {
    httpsAgent: agent
  });
  return response.data;
};

export const loadItemRequest = async (collectionName, itemId) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/${collectionName}/`, {
    httpsAgent: agent
  });
  return response.data;
};
