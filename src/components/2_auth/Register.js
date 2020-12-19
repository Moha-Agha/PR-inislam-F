import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import Input from '../0_0_uiElements/forms/Input';
import Button from '../0_0_uiElements/forms/Button';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      //add feedback in UI
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div >
      <div className="back-arrow" onClick={props.backToMenu}><i className="aicon-left-arrow"> </i> zurück zum Menü </div>

      <h3>
        Account Register
      </h3>
      <form onSubmit={onSubmit}>
        <div >
          <Input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            placeholder='name'
            required='required'
          />
        </div>
        <div >
          <Input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='email'
            required='required'
          />
        </div>
        <div >
          <Input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            placeholder='password'
            required='required'
          />
        </div>
        <div >
          <Input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            placeholder='Confirm Password'
            required='required'
          />
        </div>
        <Button
          type='submit'
          value='Register'
          className=''
        />
      </form>
    </div>
  );
};

export default Register;
