import React from "react";

import PremiumButton from '../0_0_uiElements/button/PremiumButton';
import SecondaryButton from '../0_0_uiElements/button/SecondaryButton';

const Pagination = () => {
  return (
    <div className="pagination" >
      <SecondaryButton className={'pagination_deactive'} title={'Vorherige'} />
      <ul>
        <li><a href="" className="page_active">01</a></li>
          -
          <li><a href="" className="">02</a></li>
          -
          <li><a href="" className="">03</a></li>
          -
          <li><a href="" className="">100</a></li>
      </ul>
      <PremiumButton title={'Nächster'} />
    </div>
  );
};

export default Pagination;



