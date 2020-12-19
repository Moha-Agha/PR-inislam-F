import React from "react";
import { Link } from 'react-router-dom';

const FooterRedirection = ({ to }) => {

  return (
    <div className="redirection-footer">

      {to === 'home' ?
        <>
          <h1>
            Zurück zur
          </h1>
          <Link to='/'  ><h1>Homepage?</h1></Link>
        </>
        :
        <>
          <h1>
            Na, möchtest du mich
          </h1>
          <Link to='/contact' ><h1>kontaktieren?</h1></Link>
        </>
      }


    </div>
  );
};

export default FooterRedirection;


