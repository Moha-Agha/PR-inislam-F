import React from "react";

const BannerPromotional = ({ TextTitle = '', TextBody }) => {
  return (
    <div className="Banner-promotional">
      <h2>
        {TextTitle}
      </h2>
      <p>
        {TextBody}
      </p>
      <a className='secondary-button' href='https://paypal.me/pools/c/8vvoIYGbxt' rel="noopener noreferrer" target='_blank' >أدعم الموقع الأن</a>
      <span className="sub-link">
        بالضعط على الزر ستنتقل إلى موقع البي بال
      </span>
    </div>
  );
};

export default BannerPromotional;
