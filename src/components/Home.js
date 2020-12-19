import React, { useEffect } from 'react';

import Alerts from '../layout/Alerts';

import SocialMedia from '../components/0_0_uiElements/SocialMedia';
import MessengerIcon from '../components/0_0_uiElements/MessengerIcon';
import Portfolio from './portfolio/Portfolio';
import Service from './service/Service';


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <div className="container">
        <Alerts />
        <h1 className="title">
          Wir helfen Businesses <br />
          ins Auge zu fallen
          </h1>
        <p className="description">
          durch die Erstellung beeindruckender <span >Logos</span> und <span >Websites</span>.
          </p>
        <div className="home-footer">
          <SocialMedia />
          <MessengerIcon mobile='show' />
        </div>
      </div>
      <Portfolio />
      <Service />
    </>
  );
};

export default Home;
