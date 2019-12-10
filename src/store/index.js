import {createStore} from 'redux';
import reducers from '~/reduces';

const store = createStore(reducers);

export default store;
