import React from "react";
import Sharing from "./Sharing"

const ArticleImage = ({ articleTitle = ' ', articleSlug = ' ', heroImage = { image: '', copyright: "niceTwice.de", alt: "niceTwice.de" } }) => {
  const imageUrl = 'https://nicetwicede.herokuapp.com/'
  return (
    <>
      <div className="article_hero-image">
        <Sharing articleTitle={articleTitle} articleSlug={articleSlug} />
        <img src={`${imageUrl}image/${heroImage.image}`} alt={heroImage.alt} />
        <span className="article_image_image-info">{heroImage.copyright}</span>
      </div>
    </>
  );
};

export default ArticleImage;
