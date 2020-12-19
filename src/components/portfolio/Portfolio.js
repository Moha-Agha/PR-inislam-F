import React from "react";

import { PortfolioData } from "./PortfolioData"

import FooterRedirection from '../0_1_layout/footer/FooterRedirection'

import BackTo from "../0_0_uiElements/button/BackTo"
import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {

  return (
    <div className="container">
      <BackTo to='/' title='Zurück zum Home' />
      <div id="portfolio" >

        <h1 className="portfolio_title"> Portfolio </h1>
        <p className="portfolio_subtitle">UI-UX design website and App programming</p>

        <div className='portfolio'>
          {PortfolioData.map(({ id, image, type, href }) => {
            return < PortfolioItem key={id} number={id} image={image} type={type} href={href} />
          })}
        </div>
      </div>

      <FooterRedirection />
    </div>
  )

};

export default Portfolio;



