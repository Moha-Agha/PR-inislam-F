import React, { useReducer } from 'react';
import axios from 'axios';
import SectionContext from './sectionContext';
import sectionReducer from './sectionReducer';
import {
  GET_SECTION,
  GET_SECTIONS,
  ADD_SECTIONS,
  UPDATE_SECTIONS,
  DELETE_SECTIONS,
  SET_CURRENT_SECTION,
  CLEAR_CURRENT_SECTION,
  SECTIONS_ERROR
} from '../types';

import { API } from '../../utils/variables';

const SectionState = props => {
  const initialState = {
    section: null,
    sections: null,
    currentSection: null,
    loadingSection: true,
    error: null
  };

  const [state, dispatch] = useReducer(sectionReducer, initialState);

  // Get Sections
  const getSections = async () => {
    try {
      const res = await axios.get(`${API}/sections`);

      dispatch({
        type: GET_SECTIONS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SECTIONS_ERROR,
        payload: err.response.msg
      });
    }
  };
  // Get Section
  const getSection = async (slug) => {
    try {
      const res = await axios.get(`${API}/sections/${slug}`);

      dispatch({
        type: GET_SECTION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SECTIONS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Section
  const addSection = async sectionFields => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(`${API}/sections`, sectionFields, config);

      dispatch({
        type: ADD_SECTIONS,
        payload: res.data
      });
    } catch (err) {
      if (err.response.msg) {
        dispatch({
          type: SECTIONS_ERROR,
          payload: err.response.msg
        })
      }
    }
  };

  // Delete Section
  const deleteSection = async id => {
    try {
      await axios.delete(`${API}/sections/${id}`);

      dispatch({
        type: DELETE_SECTIONS,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: SECTIONS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update article
  const updateSection = async sectionFields => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `${API}/sections/${sectionFields.id}`,
        sectionFields,
        config
      );

      dispatch({
        type: UPDATE_SECTIONS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SECTIONS_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Set Current Section
  const setCurrentSection = section => {
    dispatch({ type: SET_CURRENT_SECTION, payload: section });
  };

  // Clear Current Section
  const clearCurrentSection = () => {
    dispatch({ type: CLEAR_CURRENT_SECTION });
  };

  return (
    <SectionContext.Provider
      value={{
        section: state.section,
        sections: state.sections,
        currentSection: state.currentSection,
        loadingSection: state.loadingSection,
        error: state.error,
        getSection,
        getSections,
        addSection,
        updateSection,
        deleteSection,
        setCurrentSection,
        clearCurrentSection
      }}
    >
      {props.children}
    </SectionContext.Provider>
  );
};

export default SectionState;
