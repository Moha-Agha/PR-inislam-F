import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import NavContext from '../../context/nav/navContext';


import Input from '../../components/0_0_uiElements/forms/Input';
import Button from '../../components/0_0_uiElements/forms/Button';

const Login = props => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const navContext = useContext(NavContext)
  const { setSidebarItem } = navContext;

  useEffect(() => {
    if (isAuthenticated) {
      // props.history.push('/');
      setSidebarItem('menu')
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'error');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    < >
      <div className="back-arrow" onClick={() => { setSidebarItem('menu') }}><i className="aicon-left-arrow"> </i> zurück zum Menü </div>
      <h3>Account Login</h3>
      <form onSubmit={onSubmit}>
        <div >
          <Input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='Email'
            required='required'
          />
        </div>
        <div className='form-group'>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            placeholder='Password'
            required='required'
          />

        </div>
        <Button
          type='submit'
          value='Login'
          className=''
        />
      </form>
    </>
  );
};

export default Login;
