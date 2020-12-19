import {
  GET_MESSAGES,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  MESSAGE_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading: false
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [action.payload],
        loading: false
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          message => message._id !== action.payload
        ),
        loading: false
      };
    case MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
