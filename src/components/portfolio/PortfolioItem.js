import React from "react";

const PortfolioItem = ({ number = '', image = '', type = '.jpg', href = '#' }) => {

  let img
  let path

  if (image !== '') {
    path = require('../../media/image/' + image + type)
    img = (
      <div className='portfolio-item_card'>
        < a href={href} target="_blank" rel="noopener noreferrer" className="portfolio-item-img" >
          <img src={path} alt="niceTwice.de portfolio" />
        </a>
      </div>
    )
  } else {
    img = <div className='free-place'><div><h2>EIN FREIER PLATZ<br />FÜR DEIN BUSINESS!</h2></div></div>
  }




  return (
    <div className='portfolio-item'>
      <span className='portfolio-item_number'>{number}</span>
      {img}
    </div>
  );
};

export default PortfolioItem;



