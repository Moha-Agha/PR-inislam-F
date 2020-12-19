import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const ScrollToTopButton = () => {

  const [toTop, setToTop] = useState(false)
  let startPoint = 250

  window.onscroll = () => {
    document.body.scrollTop > startPoint || document.documentElement.scrollTop > startPoint ?
      setToTop(true) :
      setToTop(false)
  };


  return (
    <AnchorLink href="#nav" className={toTop ? "scroll-to-top-button" : "scroll-to-top-button hide"} >
      <i className='aicon-up-arrow'></i>
    </AnchorLink>
  );
};

export default ScrollToTopButton;
