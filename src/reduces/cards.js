import {CARDS} from '~/constants/actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CARDS.LIKE_CHARACTERS:
      return {
        ...state,
        character: action.payload,
      };
    case CARDS.NOPE_CHARACTERS:
      return {
        ...state,
        character: action.payload,
      };
    default:
      return state;
  }
};
