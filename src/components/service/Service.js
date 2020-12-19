import React, { useEffect, useState } from "react";

import { ServiceData } from "./ServiceData"
import ServiceItem from "./ServiceItem"

import BackTo from "../0_0_uiElements/button/BackTo"
import FooterRedirection from "../0_1_layout/footer/FooterRedirection"

const Service = () => {

  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div id="service" >
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <h1 className="service_title"> Service </h1>
        <p className="service_subtitle">Modernste Technologie und Startup freundliche Atmosphäre</p>
      </div>

      <div className={width > 700 ? 'service container' : 'service'}>
        <div className='services'>
          {ServiceData.map(({ icon, title, price, notic, time }) => {
            return < ServiceItem key={title} icon={icon} title={title} price={price} notic={notic} time={time} />
          })}
        </div>

        {/* <div className='service-notic'>
          Bist du Startup-Unternehmer/in und die Kosten sind für dich zu hoch? <Link to="/contact" onClick={() => { setCurrentNav('home') }}>Schreib uns eine Nachricht!</Link>
        </div> */}

      </div>

      <FooterRedirection />
    </div >
  )

};

export default Service;



