import Axios from 'axios';

import {BACKEND} from '~/config/vars';

const Client = Axios.create({
  baseURL: BACKEND.BASEURL,
  timeout: BACKEND.TIMEOUT,
});

export default Client;
