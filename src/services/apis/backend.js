import Axios from 'axios';

import {BACKEND} from '~/config/vars';

const Client = Axios.create({
  baseURL: 'https://bff-marvel.herokuapp.com',
  timeout: 30000,
});

export default Client;
