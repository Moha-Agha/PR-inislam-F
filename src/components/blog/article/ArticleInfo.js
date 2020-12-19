import React from "react";

const ArticleInfo = ({ ReadingTime, socialMedia, author, avatar, date }) => {

  let publishDate = date.split('-').[0] + '.' + date.split('-').[1] + '.' + date.split('-').[2].substring(0, 2)

  const { youtube, spotify } = socialMedia

  return (
    <div className="article_info">

      <div className="article_author">
        <img src={`http://localhost:5000/image/${avatar}`} alt="article author" width="55" height="55" />
        <div>
          <div className="article_author_name"> {author} </div>
          <div className="article_author_publish-date">{publishDate}</div>
        </div>
      </div>

      <div className="article_reading-send-container">
        <div className="article_reading-duration">
          <i className="aicon-clock"></i>
          <span>{ReadingTime}</span>
          <span>Minuten lesen</span>
        </div>


        <a href={youtube} className="article_send-me-to" target="_blank" rel="noopener noreferrer">
          <i className="aicon-youtube"></i>
          <span> Artikel ansehen </span>
        </a>

        <a href={spotify} className="article_send-me-to" target="_blank" rel="noopener noreferrer">
          <i className="aicon-spotify"></i>
          <span> Artikel anhören </span>
        </a>

      </div>
    </div>
  );
};

export default ArticleInfo;
