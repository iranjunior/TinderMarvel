import {combineReducers} from 'redux';

import cards from './cards';
import details from './details';
import forms from './forms';
import session from './session';
import characters from './characters';

export default combineReducers({
  details,
  forms,
  cards,
  session,
  characters,
});
