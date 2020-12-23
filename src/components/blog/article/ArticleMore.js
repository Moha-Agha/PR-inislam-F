import React, { useEffect, useContext } from "react";
import SectionContext from '../../../context/section/sectionContext';

import ArticleMotivator from '../ArticleMotivator';
import Preloader from "../../0_1_layout/Preloader"

const ArticleMore = ({ sectionSlug, articleSlug }) => {

  const sectionContext = useContext(SectionContext);
  const { getSection, section } = sectionContext;


  useEffect(() => {
    getSection(sectionSlug)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="article_more">
      <h2>المزيد من المقالات</h2>


      <div className="article_more_blogs">
        <div className="article-motivators-contener">
          {section != null ? section[1].filter(sectionSlugs => sectionSlugs.slug !== articleSlug).slice(0, 2).map(({
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
          }) : <Preloader />
          }
        </div>
      </div>


    </div>
  );
};

export default ArticleMore;
