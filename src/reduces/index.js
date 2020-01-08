import {combineReducers} from 'redux';

import cards from './cards';
import details from './details';
import forms from './forms';
import session from './session';

export default combineReducers({
  details,
  forms,
  cards,
  session,
});
