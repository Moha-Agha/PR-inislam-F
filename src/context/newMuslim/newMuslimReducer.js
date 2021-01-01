import {
  REGISTER_NEW_EMAIL,
  REGISTER_FAIL_NEW_EMAIL,
  GET_NEW_MUSLIM_EMAILS,
  NEW_MUSLIM_EMAILS_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case REGISTER_NEW_EMAIL:
      return {
        ...state,
        // email: action.payload.email,
        email: [action.payload],
        emailLoading: false
      };
    case GET_NEW_MUSLIM_EMAILS:
      return {
        ...state,
        emails: action.payload,
        emailLoading: false
      };
    case NEW_MUSLIM_EMAILS_ERROR:
      return {
        ...state,
        emailLoading: false,
        emails: null,
        emailError: action.payload
      };
    case REGISTER_FAIL_NEW_EMAIL:
      return {
        ...state,
        emailLoading: false,
        email: null,
        emailError: action.payload
      };

    default:
      return state;
  }
};
