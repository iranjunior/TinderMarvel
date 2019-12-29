import {combineReducers} from 'redux';

import cards from './cards';
import details from './details';
import forms from './forms';

export default combineReducers({
  details,
  forms,
  cards,
});
