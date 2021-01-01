import React, { useReducer } from 'react';
import axios from 'axios';
import NewMuslimContext from './newMuslimContext';
import newMuslimReducer from './newMuslimReducer';
import {
  REGISTER_NEW_EMAIL,
  REGISTER_FAIL_NEW_EMAIL,
  GET_NEW_MUSLIM_EMAILS,
  NEW_MUSLIM_EMAILS_ERROR
} from '../types';

import { API } from '../../utils/variables';

const NewMuslimState = props => {
  const initialState = {
    emailLoading: true,
    emails: null,
    email: null,
    emailError: null
  };

  const [state, dispatch] = useReducer(newMuslimReducer, initialState);

  // Get article for start page of the blug
  const getNewMuslimEmails = async () => {
    try {
      const res = await axios.get(`${API}/new-muslim`);

      dispatch({
        type: GET_NEW_MUSLIM_EMAILS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: NEW_MUSLIM_EMAILS_ERROR,
        payload: err.response
      });
    }
  };

  // Register new email
  const registerNewEmail = async addemail => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(`${API}/new-muslim`, addemail, config);
      dispatch({
        type: REGISTER_NEW_EMAIL,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL_NEW_EMAIL,
        payload: err.response.data.msg
      });
    }
  };


  return (
    <NewMuslimContext.Provider
      value={{
        emailLoading: state.emailLoading,
        emails: state.emails,
        email: state.email,
        emailError: state.emailError,
        registerNewEmail,
        getNewMuslimEmails
      }}
    >
      {props.children}
    </NewMuslimContext.Provider>
  );
};

export default NewMuslimState;
