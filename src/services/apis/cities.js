import axios from 'axios';
import {RAPID} from '~/config/vars';
const api = axios.create({
  baseURL: RAPID.BASEURL,
  headers: {
    'x-rapidapi-key': RAPID.API_KEY,
    'x-rapidapi-host': RAPID.HOST,
    'rapidapi-project': RAPID.PROJECT,
  },
});

export default api;
