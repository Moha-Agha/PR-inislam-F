import React from "react";
import SecondaryButton from "../../0_0_uiElements/button/SecondaryButton"

const BannerPromotional = ({ TextTitle = '', TextBody }) => {
  return (
    <div className="Banner-promotional">
      <h2>
        {TextTitle}
      </h2>
      <p>
        {TextBody}
      </p>
      <SecondaryButton title='أدعم الموقع الأن' goTo='/contact' />
      <span className="sub-link">
        بالضعط على الزر ستنتقل إلى موقع البي بال
      </span>
    </div>
  );
};

export default BannerPromotional;
