import React, { useEffect } from "react";

import ArticleOther from './ArticleOther'
import ArticleADDesktop from './ArticleADDesktop'

const ArticleBody = ({ articleBody, likes, id, articleTitle, articleSlug }) => {

  useEffect(() => {
    imageStyleRemove()
    // eslint-disable-next-line
  }, [])

  return (

    <div className="article_body">

      <div className="article_body_contener">

        <div id='article_content' className='article_content' dangerouslySetInnerHTML={{ __html: articleBody }} />

        {/* <div className="article_body_image">
          <img src="https://source.unsplash.com/collection/60" alt='alt of the' />
          <span className="article_body_imageimage-info">
            Quelle - so und so Seite
        </span>
        </div> */}

        <ArticleOther likes={likes} id={id} articleTitle={articleTitle} articleSlug={articleSlug} />

      </div>

      <div className="article_body_ad-desktop">
        <ArticleADDesktop />
      </div>
    </div>
  );
};

const imageStyleRemove = () => {
  let images = document.getElementById('article_content').getElementsByTagName("img");
  images = Array.from(images);
  if (images.length !== 0) {
    images.map((image) => image.removeAttribute("style"))
  }

}

export default ArticleBody;
