import {FORM} from '~/constants/actions';

const initialState = {
  name: '',
  email: '',
  login: '',
  password: '',
  city: '',
  suggestionsCities: [],
  state: '',
  country: '',
  confirmPassword: '',
  age: '',
  secure: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FORM.CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case FORM.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case FORM.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case FORM.CHANGE_SUGGESTIONS_CITIES:
      return {
        ...state,
        suggestionsCities: action.payload,
      };
    case FORM.CHANGE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case FORM.CHANGE_STATE:
      return {
        ...state,
        state: action.payload,
      };
    case FORM.CHANGE_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case FORM.CHANGE_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case FORM.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case FORM.CHANGE_SECURE:
      return {
        ...state,
        secure: action.payload,
      };
    case FORM.CHANGE_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload,
      };
    default:
      return state;
  }
};
