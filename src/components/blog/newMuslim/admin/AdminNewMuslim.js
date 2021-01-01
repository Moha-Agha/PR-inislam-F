import React, { useContext, useEffect } from 'react';

import newMuslimContext from '../../../../context/newMuslim/newMuslimContext'

import NewMuslimItem from './NewMuslimItem';
import Preloader from '../../../0_1_layout/Preloader';

const AdminNewMuslim = () => {

  const NewMuslimContext = useContext(newMuslimContext)

  const { getNewMuslimEmails, emails, emailLoading } = NewMuslimContext;

  useEffect(() => {
    getNewMuslimEmails()
    // eslint-disable-next-line 
  });

  if (emailLoading && emails !== null) {
    return (
      <div className="container">
        <div className="admin-article">
          {emails.length !== 0 ? emails.map(emailItem => (<NewMuslimItem key={emailItem._id} emailItem={emailItem} />)) : <h3>No article</h3>}
        </div>
      </div>
    )
  } else {
    return (<Preloader />)
  }

};

export default AdminNewMuslim;
