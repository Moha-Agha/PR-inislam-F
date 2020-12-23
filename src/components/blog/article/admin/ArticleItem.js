import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";

import { IMAGE_URL } from "../../../../utils/variables";
import ArticleContext from '../../../../context/article/articleContext';
import ImageContext from '../../../../context/image/imageContext';


const ArticleItem = ({ article }) => {

  let history = useHistory();
  const articleContext = useContext(ArticleContext)
  const { setCurrentArticle, deleteArticle } = articleContext;

  const imageContext = useContext(ImageContext)
  const { deleteImage } = imageContext;

  const {
    _id,
    slug,
    title,
    subtitle,
    date,
    heroImage,
    tags
  } = article;

  const [deleteUi, setDeleteUi] = useState(false)

  const EditButton = (article) => {
    setCurrentArticle(article)
    history.push(`edit-article`)
  }

  const DeleteButton = (id) => {
    deleteArticle(id);
    deleteImage(heroImage.image)
  }

  // article card ui if user want delete article
  const uiDeleteMessage = <>
    <i onClick={() => setDeleteUi(false)} className='aicon-x' />
    <div className="article-footer ">
      <button type='button' className="delete-button article-footer_sure-delete" onClick={() => DeleteButton(_id)} >Ja, ich möchte dem Artikel entfernen</button>
    </div>
  </>

  // article card ui
  const uiArticleCard = <>
    <div className="article-section">
      <p>{tags[0]}</p>
      <p>{date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4)}</p>
    </div>
    <div className='article-image'>
      <img src={`${IMAGE_URL}image/${heroImage.image}`} alt={heroImage.alt} />
    </div>
    <p className="article-title"><Link to={`/article/${slug}`}>{title}</Link></p>
    <p className="article-subtitle">{subtitle}</p>

    <div className="article-footer">
      <button type='button' className="edit-button" onClick={() => EditButton(article)}><i className='aicon-pencil' /></button>
      <button type='button' className="delete-button" onClick={() => setDeleteUi(true)}><i className='aicon-trash' /></button>
    </div>
  </>

  return (
    <div className='article-card'>
      {deleteUi ? uiDeleteMessage : uiArticleCard}
    </div>
  )


};

export default ArticleItem;
