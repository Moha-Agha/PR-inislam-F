import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import NavContext from '../../context/nav/navContext';

import Input from '../../components/0_0_uiElements/forms/Input';
import Button from '../../components/0_0_uiElements/forms/Button';

const Profile = props => {

  const authContext = useContext(AuthContext);
  const { loadUser, updateUser, user, error, clearErrors, isAuthenticated } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const navContext = useContext(NavContext)
  const { setSidebarItem } = navContext;

  const [changeDone, setChangeDone] = useState(false)
  // dispaly imag
  const [fileSrc, setFileSrc] = useState(user.avatar);
  const [imageLink, setImageLink] = useState('http://localhost:5000/image/');
  const [avatar, setAvatar] = useState(user.avatar)

  const [name, setName] = useState(user.name)
  //user info object
  let userInfo = {};

  useEffect(() => {
    if (!isAuthenticated) {
      // props.history.push('/');
      setSidebarItem('menu')
    } else {
      loadUser()
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'error');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const onChange = e => setName(e.target.value);

  // uplud the imag file
  const handleEditImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { fileId } = res.data;
      return fileId
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }

  }

  //send file target info to prossen and display image after selected
  const onChangeImage = e => {
    setAvatar(e.target.files[0]);
    if (e.target.files[0] && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        setFileSrc(e.target.result)
      };
      setImageLink(null)
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  const onSubmit = e => {
    e.preventDefault();
    if (name === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {

      // upload the image and then the rest of the article opject items
      handleEditImage(avatar).then((fileId) => {

        if (user._id) userInfo.id = user._id;
        if (name) userInfo.name = name;
        if (fileId) userInfo.avatar = fileId;

        updateUser(userInfo)
        if (!error) setChangeDone(true)

        setTimeout(() => { setChangeDone(false) }, 2000)
      })
    }
  };
  return (
    < >
      <div className="back-arrow" onClick={() => { setSidebarItem('menu') }}><i className="aicon-left-arrow"> </i> zurück zum Menü </div>
      <h4>Admin-Info bearbeiten</h4>
      <form onSubmit={onSubmit}>

        <div className="add-image add-image-user">
          <input
            type='file'
            name="images"
            id="images"
            required="required"
            onChange={onChangeImage}
          />
          <div className="add-image_file-dummy">

            {fileSrc && <img className="add-image_success" src={(imageLink !== null ? imageLink : '') + fileSrc} alt='amin avatar' />}
            {!fileSrc && <div className="add-image_default">
              <p>Please select admin avatar</p>
              <p className="add-image_default_note">Empfohlen W 900px - H 557</p>
            </div>}

          </div>
        </div>

        <div >
          <label>admin Name</label>
          <Input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required='required'
          />
        </div>

        <Button
          type='submit'
          value={changeDone ? 'IST GEÄNDERT 👍' : 'VERÄNDERN'}
        />
      </form>
    </>
  );
};

export default Profile;
