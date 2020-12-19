import React, { useEffect } from "react";

import BackTo from "../0_0_uiElements/button/BackTo"
import FooterRedirection from "../0_1_layout/footer/FooterRedirection"

const Imprint = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div id="service" >
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <h3 className="service_title"> Impressum </h3>
      </div>

      <div className='container'>

        <h3>nicetwice.de Einzelunternehmen </h3><br />
        <h4>
          Zimmermannstraße 3,<br />
          21079 Hamburg<br />
          Germany
                <br />
              Kontakt
              Telefon: +49 1575 9026756
                <br />
                E-Mail: muha.agha@gmail.com
                Internet: http://www.nicetwice.de
            </h4>
        {/* <br /><h3>Rechtliche Angaben</h3><br />
        <p>

          psn media GmbH & Co. KG
          Geschäftsführer: Carsten Lange & Alexander Neschanjan
          Handelsregister: HRA 3289, Amtsgericht Rostock
          Steuernummer: 079/161/28600, Steuer-ID: DE280960673
          vertreten durch die Lange & Neschanjan GmbH
          diese wiederum einzeln vertreten durch die Geschäftsführer Herrn Carsten Lange & Herrn Alexander Neschanjan
            </p>
        <br />
        <h3> Persönlich haftende Gesellschafterin</h3>
        <br />
        <p>
          Lange & Neschanjan GmbH, Steinstraße 6, 18055 Rostock
          Geschäftsführer: Carsten Lange & Alexander Neschanjan
          Handelsregister: HRB 12116, Amtsgericht Rostock, Steuernummer: 079/113/01452, Steuer-ID: DE280960608
            </p> */}

      </div>

      <FooterRedirection />
    </div >
  )

};

export default Imprint;



