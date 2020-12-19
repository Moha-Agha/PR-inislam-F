import React, { useState, useContext, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

import ArticleContext from '../../../context/article/articleContext'
const ArticleOther = ({ likes, id, articleTitle, articleSlug }) => {

  const [copy, setCopy] = useState('kopieren')

  const shareUrl = 'http://nicetwice.de/article/' + articleSlug;
  const title = articleTitle;

  const [newLike, setNewLike] = useState();
  const [hasLiked, setHasLiked] = useState(false);
  const articleContext = useContext(ArticleContext);
  const { NewLikeArticle } = articleContext;

  useEffect(() => {
    let num = Number(likes)
    setNewLike(num)
    // eslint-disable-next-line 
  }, [])

  const handleNewLike = (id) => {
    if (!hasLiked) {
      NewLikeArticle(id)
      setNewLike(newLike + 1)
    }
    setHasLiked(true)
  }

  return (
    <div className="article_other">

      <div className="article_other-sharing">


        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=" : interesting article : "
          className="Demo__some-network__share-button"
        >
          <i className="aicon-whatsapp"></i>
        </WhatsappShareButton>

        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button"
        >
          <i className="aicon-facebook"></i>
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <i className="aicon-twitter"></i>
        </TwitterShareButton>

        <button onClick={() => { navigator.clipboard.writeText(shareUrl); setCopy('kopiert') }} onMouseLeave={() => setCopy('kopieren')}>
          <i className="aicon-link"></i>
          <span className='sharing-tooltip'>{copy}</span>
        </button>
      </div>

      <div className="article_like">
        <span>{hasLiked ? 'Danke' : 'Liken'}</span>

        <span onClick={() => { handleNewLike(id) }} className={hasLiked ? 'article_heart-like article_heart-liked' : 'article_heart-like'}>
          <span>{newLike}</span> <i className="aicon-heart-like"></i>
        </span>

      </div>


    </div>
  );
};

export default ArticleOther;