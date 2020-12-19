import React from "react";

const ArticleMotivator = ({
  slug,
  title,
  heroImage = {
    image: 'https://source.unsplash.com/collection/12',
    copyright: "niceTwice.de",
    alt: "niceTwice.de"
  },
  socialMedia = {
    youtube: 'no',
    spotify: 'no'
  },
  likes,
  views,
  tags = ['nicetwice', 'logo'] }) => {

  const imageUrl = 'https://nicetwicede.herokuapp.com/'
  return (
    <div className="article-motivator" >

      <div className="article_motivator-content">
        <div className="article_social-media">
          <a href={socialMedia.youtube} rel="noopener noreferrer" className="a-youtube"><i className="aicon-youtube"></i></a>
          <a href={socialMedia.spotify} rel="noopener noreferrer" className="a-spotify"><i className="aicon-spotify"></i></a>
        </div>
        <div className="article_footer">
          <div className="article_tags">
            {tags.map((tag) => { return <span key={tag} className="tag">{tag}</span> })}
          </div>

          <a href={`/article/${slug}`} rel="noopener noreferrer" className="article_title hover-1">
            {title}
          </a>

          <div className="article_info">
            <a href={`/article/${slug}`} rel="noopener noreferrer" className="article_info_item">Teilen <i className="aicon-share"></i> </a>
            <div className="article_info_item"> {numberFormat(likes)} <i className="aicon-heart"></i></div>
            <div className="article_info_item"> {numberFormat(views)} <i className="aicon-eye"></i> </div>
          </div>
        </div>
      </div>

      <div className="article_image">
        <div className="article_gradient-dark"></div>
        <img src={`${imageUrl}image/${heroImage.image}`} alt="nicetwice" />
      </div>
    </div>
  );
};

const numberFormat = (number) => {
  let num = Number(number);
  return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

export default ArticleMotivator;
