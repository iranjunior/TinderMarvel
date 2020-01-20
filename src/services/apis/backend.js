import Axios from 'axios';

import {BACKEND} from '~/config/vars';

const Client = Axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 30000,
});

export default Client;
