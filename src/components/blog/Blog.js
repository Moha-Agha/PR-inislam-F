import React, { useEffect, useContext } from "react";

import NavContext from '../../context/nav/navContext';
import SectionContext from '../../context/section/sectionContext';
import ArticleContext from '../../context/article/articleContext';

import ArticleMotivator from "./ArticleMotivator"
import SectionsTag from "./SectionsTag"
import Preloader from "../0_1_layout/Preloader"


const Blog = () => {
  const navContext = useContext(NavContext)
  const { isMobile } = navContext;

  const sectionContext = useContext(SectionContext);
  const { getSections, sections, loadingSection } = sectionContext;

  const articleContext = useContext(ArticleContext);
  const { getMostVisitedArticles, getLatestArticles, mostVisitedArticles, latestArticles, loadingArticle } = articleContext;


  useEffect(() => {
    getSections();
    //most visited atricles
    getMostVisitedArticles(3);
    //Latest articles articles
    getLatestArticles(8);

    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, [])

  return (
    <>
      {loadingSection && loadingArticle ? <Preloader /> :
        <>
          <div className='container'>
            <h2 className='header-title-mobile'>
              منصة معرفية متخصصة في البحوث الإسلامية
            </h2>
            <div className="blog_sections-tag">
              <div className="blog_sections-tag-contener">

                {sections && !isMobile ? sections.slice(0, 6).map((section) => {
                  return <SectionsTag key={section._id} id={section._id} title={section.title} slug={section.slug} />
                }) : ''}

                <SectionsTag articleNumber={sections && sections.length} goTo={'/sections'} title={!isMobile ? 'كل الأقسام' : 'عرض كل الأقسام'} slug={'all-sections'} className={isMobile && 'sections-tag_full'} />

              </div>
            </div>
          </div>
          <div className={!isMobile ? 'container' : ''}>
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
