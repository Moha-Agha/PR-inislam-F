import {
  GET_SECTION,
  GET_SECTIONS,
  ADD_SECTIONS,
  UPDATE_SECTIONS,
  SET_CURRENT_SECTION,
  CLEAR_CURRENT_SECTION,
  DELETE_SECTIONS,
  SECTIONS_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SECTION:
      return {
        ...state,
        section: action.payload,
        loadingSection: false
      };
    case GET_SECTIONS:
      return {
        ...state,
        sections: action.payload,
        loadingSection: false
      };
    case ADD_SECTIONS:
      return {
        ...state,
        sections: [action.payload],
        loadingSection: false
      };
    case UPDATE_SECTIONS:
      return {
        ...state,
        loadingSection: false
      };
    case DELETE_SECTIONS:
      return {
        ...state,
        sections: state.sections.filter(
          message => message._id !== action.payload
        ),
        loadingSection: false
      };
    case SET_CURRENT_SECTION:
      return {
        ...state,
        currentSection: action.payload
      };
    case CLEAR_CURRENT_SECTION:
      return {
        ...state,
        currentSection: null
      };
    case SECTIONS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
