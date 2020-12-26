import {
  REGISTER_NEW_EMAIL,
  REGISTER_FAIL_NEW_EMAIL
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case REGISTER_NEW_EMAIL:
      return {
        ...state,
        ...action.payload,
        emailLoading: false
      };
    case REGISTER_FAIL_NEW_EMAIL:
      return {
        ...state,
        emailLoading: false,
        email: null,
        error: action.payload
      };

    default:
      return state;
  }
};
