import React from "react";
import PremiumButton from "../../0_0_uiElements/button/PremiumButton"

const BannerPromotional = ({ TextTitle = '', TextBody }) => {
  return (
    <div className="Banner-promotional">
      <h2>
        {TextTitle}
      </h2>
      <p>
        {TextBody}
      </p>
      <PremiumButton title='SCHREIB MIR JETZT!' goTo='/contact' />
      <span className="sub-link">
        Kostenlos Beratung für Startup
      </span>
    </div>
  );
};

export default BannerPromotional;
