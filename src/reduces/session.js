import {SESSION} from '~/constants/actions';

const initialState = {
  id: '',
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SESSION.CHANGE_ID:
      return {
        ...state,
        id: action.payload,
      };
    case SESSION.CHANGE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
