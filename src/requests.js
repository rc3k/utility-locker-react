import axios from 'axios';
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false
});

export const loadCollectionRequest = async (collectionName, params) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/${collectionName.toLowerCase()}/`,
    {
      httpsAgent: agent,
      params
    }
  );
  return response.data;
};
