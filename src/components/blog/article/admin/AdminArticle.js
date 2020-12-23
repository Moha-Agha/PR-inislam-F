import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import articleContext from '../../../../context/article/articleContext'

import ArticleItem from './ArticleItem';
import Preloader from '../../../0_1_layout/Preloader';

const AdminArticle = () => {

  const ArticleContext = useContext(articleContext)

  const { getArticles, articles, loadingArticle } = ArticleContext;

  useEffect(() => {
    getArticles()
    // eslint-disable-next-line 
  });

  if (!loadingArticle && articles !== null) {
    return (
      <div className="container">
        <Link to='/new-article' className='premium-button button-article' >Neu Artikel hinzufügen</Link>
        <div className="admin-article">
          {articles.length !== 0 ? articles.map(article => (<ArticleItem key={article._id} article={article} />)) : <h3>No article</h3>}
        </div>
      </div>
    )
  } else {
    return (<Preloader />)
  }

};

export default AdminArticle;
