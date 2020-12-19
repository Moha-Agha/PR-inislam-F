import React, { useState, useContext, useRef } from "react";

import SectionContext from '../../../context/section/sectionContext';

import ArticleMotivator from "../ArticleMotivator"

import HeaderOfSection from "./HeaderOfSection"
import BackTo from "../../0_0_uiElements/button/BackTo"

import Preloader from "../../0_1_layout/Preloader"

const Section = (props) => {

  const sectionContext = useContext(SectionContext);
  const { getSection, section } = sectionContext;

  const [width, setWidth] = useState()
  const [uiLoding, setUiLoding] = useState(false)

  // runs only once before rendering the component.
  const willMount = useRef(true);
  if (willMount.current) {
    let spl = props.location.pathname.split('/');
    let res = spl[2]
    getSection(res)

    setWidth(window.innerWidth);

    //loading ui
    setTimeout(() => {
      setUiLoding(true)
    }, 800);

    willMount.current = false;
  }



  if (!uiLoding) {
    return <Preloader />
  } else if (section !== null) {
    return (<>
      <div className='container'>
        <BackTo to='/' title='Zurück zum Home' />
        <HeaderOfSection sectionInfo={section[0]} />
      </div>

      <div className={width > 700 ? 'container' : null}>

        <div className="article-motivators-without-slider">
          <div className="article-motivators-contener-without-slider">
            {section[1].slice(0, 6).map(({
              _id,
              slug,
              title,
              subtitle,
              heroImage,
              socialMedia,
              articleBody,
              likes,
              views,
              tags,
              images }) => {
              return (
                <ArticleMotivator
                  key={_id}
                  id={_id}
                  slug={slug}
                  title={title}
                  subtitle={subtitle}
                  heroImage={heroImage}
                  socialMedia={socialMedia}
                  articleBody={articleBody}
                  likes={likes}
                  views={views}
                  tags={tags}
                  images={images}
                />
              )
            })}
          </div>
        </div>

        {/* <Pagination /> */}
      </div>
    </>)
  } else { return <Preloader /> }


};

export default Section;
