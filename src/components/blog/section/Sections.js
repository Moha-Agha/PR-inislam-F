import React, { useContext, useEffect } from "react";

import SectionContext from '../../../context/section/sectionContext';
import ArticleContext from '../../../context/article/articleContext';

import SectionsItem from "./SectionsItem"

import BackTo from "../../0_0_uiElements/button/BackTo"
import Preloader from "../../0_1_layout/Preloader"

const Sections = () => {

  const sectionContext = useContext(SectionContext);
  const { getSections, sections } = sectionContext;

  const articleContext = useContext(ArticleContext);
  const { getArticles, articles } = articleContext;

  const contOfArticles = (articles, section) => {
    let cont = articles.filter((article) => section === article.section)
    return cont.length;
  }

  useEffect(() => {
    if (sections !== null) getSections()
    getArticles()
    // eslint-disable-next-line
  }, [])

  if (sections !== null && articles !== null) {

    return (<>
      <div className='container'>
        <BackTo to='/' title='العودة إلى الصفحة الرئيسية' />

        <div className='sections-items'>
          {sections.map((section) => {
            return <SectionsItem key={section._id} sectionTitle={section.title} articleCount={contOfArticles(articles, section._id)} sectionSlug={section.slug} />
          })}
        </div>
      </div>
    </>)
  } else {
    return <Preloader />
  }


};

export default Sections;
