import {DETAILS} from '~/constants/actions';
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case DETAILS.REFERENCE_LINK:
      return {
        ...state,
        reference: action.payload,
      };
    default:
      return state;
  }
};
