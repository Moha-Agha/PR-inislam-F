import React, { useEffect, useState, useContext } from "react";

import SectionContext from '../../context/section/sectionContext';
import ArticleContext from '../../context/article/articleContext';

import FooterRedirection from "../0_1_layout/footer/FooterRedirection"

import ArticleMotivator from "./ArticleMotivator"
import SectionsTag from "./SectionsTag"
import Preloader from "../0_1_layout/Preloader"


const Blog = () => {

  const sectionContext = useContext(SectionContext);
  const { getSections, sections, loadingSection } = sectionContext;

  const articleContext = useContext(ArticleContext);
  const { getMostVisitedArticles, getLatestArticles, mostVisitedArticles, latestArticles, loadingArticle } = articleContext;


  const [width, setWidth] = useState(1024)

  useEffect(() => {
    getSections();
    //most visited atricles
    getMostVisitedArticles(3);
    //Latest articles articles
    getLatestArticles(8);

    window.scrollTo(0, 0);
    setWidth(window.innerWidth);

    // eslint-disable-next-line
  }, [])

  return (
    <>
      {loadingSection && loadingArticle ? <Preloader /> :
        <>


          <div className={width > 700 ? 'container' : null}>

            <div className="blog_sections-tag">
              <div className="blog_sections-tag-contener-RTL">

                {sections ? sections.slice(0, 6).map((section) => {
                  return <SectionsTag key={section._id} id={section._id} title={section.title} slug={section.slug} />
                }) : <Preloader />}

                <SectionsTag articleNumber={sections && sections.length} title={'كل الأقسام'} slug={'all-sections'} />

              </div>
            </div>

            <div className="article-motivators">
              <div className="article-motivators-contener">
                {mostVisitedArticles !== null && mostVisitedArticles.map(({ _id, slug, heroImage, tags, title, share, likes, views, socialMedia }) => {
                  return (
                    <ArticleMotivator
                      key={_id}
                      id={_id}
                      slug={slug}
                      heroImage={heroImage}
                      tags={tags}
                      sections={sections}
                      title={title}
                      share={share}
                      likes={likes}
                      views={views}
                      socialMedia={socialMedia} />
                  )
                })
                }
              </div>
            </div>

            {latestArticles !== null && (latestArticles.length !== 0 && <h3 className="blog-home-title_h3">المقالات الجديدة</h3>)}
            <div className="article-motivators">
              <div className="article-motivators-contener8">
                {
                  latestArticles !== null && latestArticles.map(({ _id, slug, heroImage, tags, title, share, likes, views, socialMedia }) => {
                    return (
                      <ArticleMotivator
                        key={_id}
                        id={_id}
                        slug={slug}
                        heroImage={heroImage}
                        tags={tags}
                        sections={sections}
                        title={title}
                        share={share}
                        likes={likes}
                        views={views}
                        socialMedia={socialMedia} />
                    )
                  })
                }
              </div>
            </div>

          </div>

        </>

      }
    </>
  );

};

export default Blog;
