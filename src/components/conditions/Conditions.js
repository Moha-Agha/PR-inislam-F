import React, { useEffect, useState } from "react";

import BackTo from "../0_0_uiElements/button/BackTo"
import FooterRedirection from "../0_1_layout/footer/FooterRedirection"

const Conditions = () => {

  const [width, setWidth] = useState()

  useEffect(() => {
    window.scrollTo(0, 0);
    setWidth(window.innerWidth);
  }, []);


  return (
    <div id="service" >
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <h1 className="service_title"> AGB </h1>
      </div>

      <div className={width > 700 ? 'service container' : 'service'}>

      </div>

      <FooterRedirection />
    </div >
  )

};

export default Conditions;



