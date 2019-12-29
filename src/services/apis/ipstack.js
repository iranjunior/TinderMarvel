import axios from 'axios';
import {IPSTACK} from '~/config/vars';
const api = axios.create({
  baseURL: IPSTACK.BASEURL,
});

export default api;
