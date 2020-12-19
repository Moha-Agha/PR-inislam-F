import {
  GET_IMAGES,
  DELETE_IMAGE,
  IMAGES_ERROR
} from '../types';



export default (state, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        loadingImages: false
      };
    case DELETE_IMAGE:
      return {
        ...state,
        loadingImages: false
      };
    case IMAGES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
