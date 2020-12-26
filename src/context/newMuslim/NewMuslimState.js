import React, { useReducer } from 'react';
import axios from 'axios';
import NewMuslimContext from './newMuslimContext';
import newMuslimReducer from './newMuslimReducer';
import {
  REGISTER_NEW_EMAIL,
  REGISTER_FAIL_NEW_EMAIL
} from '../types';

import { API } from '../../utils/variables';

const NewMuslimState = props => {
  const initialState = {
    emailLoading: true,
    email: null,
    emailError: null
  };

  const [state, dispatch] = useReducer(newMuslimReducer, initialState);

  // Register new email
  const registerNewEmail = async email => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(`${API}/new-muslim`, email, config);
      dispatch({
        type: REGISTER_NEW_EMAIL,
        payload: res.data
      });
    } catch (err) {
      console.log(err.message)
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
        email: state.email,
        emailError: state.emailError,
        registerNewEmail
      }}
    >
      {props.children}
    </NewMuslimContext.Provider>
  );
};

export default NewMuslimState;
