import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sectionContext from '../../../../context/section/sectionContext'

import SectionItem from './SectionItem';
import Preloader from '../../../0_1_layout/Preloader';

const AdminSection = () => {

  const SectionContext = useContext(sectionContext)
  const { getSections, sections } = SectionContext;

  useEffect(() => {
    getSections()
    // eslint-disable-next-line 
  }, []);


  if (sections !== null) {
    return (
      <div className="container">
        <Link to='/new-section' className='premium-button button-article' >Neu Section hinzufügen</Link>
        <div className="messages">
          {sections.length !== 0 ? sections.map(section => (<SectionItem key={section._id} section={section} />)) : <h3>No section</h3>}
        </div>
      </div>
    )
  } else {
    return (<Preloader />)
  }

};

export default AdminSection;
