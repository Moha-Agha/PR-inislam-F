import React, { useReducer } from 'react';
import axios from 'axios';
import ImageContext from './imageContext';
import imageReducer from './imageReducer';
import {
  GET_IMAGES,
  DELETE_IMAGE,
  IMAGES_ERROR,
  API
} from '../types';

const ArticleState = props => {
  const initialState = {
    image: null,
    images: null,
    loadingImages: true,
    error: null
  };

  const [state, dispatch] = useReducer(imageReducer, initialState);

  // Get Images 
  const getImages = async () => {
    try {
      const res = await axios.get(`${API}/image`);

      dispatch({
        type: GET_IMAGES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: IMAGES_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Image
  const deleteImage = async id => {
    try {
      await axios.delete(`${API}/image/${id}`);

      dispatch({
        type: DELETE_IMAGE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: IMAGES_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <ImageContext.Provider
      value={{
        image: state.image,
        images: state.images,
        loadingImages: state.loadingImages,
        error: state.error,
        getImages,
        deleteImage
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ArticleState;
