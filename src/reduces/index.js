import {
  LIKE_CHARACTERS,
  NOPE_CHARACTERS,
  REFERENCE_LINK,
} from '~/constants/actions';
export default (state = {}, action) => {
  switch (action.type) {
    case LIKE_CHARACTERS:
      return {
        ...state,
        character: action.payload,
      };
    case NOPE_CHARACTERS:
      return {
        ...state,
        character: action.payload,
      };
    case REFERENCE_LINK:
      return {
        ...state,
        reference: action.payload,
      };
    default:
      return state;
  }
};
