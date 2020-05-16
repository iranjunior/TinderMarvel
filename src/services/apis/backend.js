import Axios from 'axios';

import {BACKEND} from '~/config/vars';
import Storage from '../asyncStorage';
const Client = Axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 30000,
});

export default Client;

export const getCharacters = async () => {
  try {
    const {token} = Storage.get('user');

    const response = await Client.get('/characters', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
    return {};
  } catch (error) {
    return {};
  }
};
