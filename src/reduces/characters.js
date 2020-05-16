import {CHARACTERS} from '~/constants/actions';
const initialState = {
  characters: [],
  current: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS.CHANGE_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case CHARACTERS.CHANGE_CHARACTERS_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
