import React from "react";
import { Link } from 'react-router-dom';

const ArticleADDesktop = () => {
  const adTitel = 'Immer noch keine eigene Webseite?'
  const adInfo = 'E-Commerce-Website Firmenwebsite Restaurantwebsite Blog-Website oder Wünsche realisieren.'
  const adInterestingPoint = 'Deine Blog-Website für nur 30€/Monat !'
  const adAction = 'Schreib mir eine Nachricht!'
  return (
    <>
      {/* <div className="article_body_ad_info">
        <i className="aicon-info"></i>
          Wir sind nicht verantwortlich für den Inhalt dieser Anzeige.
      </div> */}
      <div className="article_body_ad_ad">
        <div className='my_ad-container'>
          <h1 className='my_ad-title'> {adTitel} </h1>
          <p className='my_ad-info'>{adInfo}</p>
          <p className='my_ad-interesting-point'>{adInterestingPoint}</p>

          <Link to='/contact' className='my_ad-action'>{adAction}</Link>
        </div>
      </div>
    </>
  );
};

export default ArticleADDesktop;
