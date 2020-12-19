import React from "react";

const ScrollInfo = ({ mobile = 'show' }) => {



  return (
    <div className={"scroll-info " + mobile} >
      <i className="arrow-up aicon-up-arrow"></i>
      <div className="scroll-line">
        <div className="scroll-posation"></div>
      </div>
      <i className="arrow-down aicon-down-arrow activ"></i>
    </div >
  )
};

export default ScrollInfo;
