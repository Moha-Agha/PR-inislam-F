import React from "react";
import { IMAGE_URL } from "../../../utils/variables";
import Sharing from "./Sharing"

const ArticleImage = ({ articleTitle = ' ', articleSlug = ' ', heroImage = { image: '', copyright: "niceTwice.de", alt: "niceTwice.de" } }) => {
  return (
    <>
      <div className="article_hero-image">
        <Sharing articleTitle={articleTitle} articleSlug={articleSlug} />
        <img src={`${IMAGE_URL}image/${heroImage.image}`} alt={heroImage.alt} />
        <div className="article_image_image-info">المصدر - {heroImage.copyright}</div>
      </div>
    </>
  );
};

export default ArticleImage;
