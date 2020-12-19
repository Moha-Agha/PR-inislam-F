import React, { useReducer } from 'react';
import axios from 'axios';
import ArticleContext from './articleContext';
import articleReducer from './articleReducer';
import {
  GET_ARTICLES,
  GET_SECTION_ARTICLES,
  GET_ARTICLE,
  GET_MOST_VISITED_ARTICLES,
  GET_LATEST_ARTICLES,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  UPDATE_NEW_VIEW_ARTICLE,
  UPDATE_NEW_Like_ARTICLE,
  DELETE_ARTICLE,
  SET_CURRENT_ARTICLE,
  CLEAR_CURRENT_ARTICLE,
  ARTICLE_ERROR,
  API
} from '../types';

const ArticleState = props => {
  const initialState = {
    article: null,
    articles: null,
    sectionArticles: null,
    mostVisitedArticles: null,
    latestArticles: null,
    loadingArticle: true,
    currentArticle: null,
    error: null
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);


  // Get article for start page of the blug
  const getArticles = async () => {
    try {
      const res = await axios.get(`${API}/articles`);

      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Get Most Visited Articles
  const getMostVisitedArticles = async (articleNumber) => {
    // /${articleNumber}
    try {
      const res = await axios.get(`${API}/articles/article/most-visited`);

      dispatch({
        type: GET_MOST_VISITED_ARTICLES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Get Latest Articles
  const getLatestArticles = async (articleNumber) => {
    try {
      const res = await axios.get(`${API}/articles/article/latest-articles`);

      dispatch({
        type: GET_LATEST_ARTICLES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Get article by section
  const getArticleBySection = async (sectionId) => {
    try {
      const res = await axios.get(`${API}/articles/section/${sectionId}`);

      dispatch({
        type: GET_SECTION_ARTICLES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Get article by id
  const getArticleById = async (id) => {
    try {
      const res = await axios.get(`${API}/articles/article/${id}`);

      dispatch({
        type: GET_ARTICLE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Get article by slug
  const getArticleBySlug = async (slug) => {
    try {
      const res = await axios.get(`${API}/articles/${slug}`);

      dispatch({
        type: GET_ARTICLE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add article
  const addArticle = async articleItems => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(`${API}/articles`, articleItems, config);

      dispatch({
        type: ADD_ARTICLE,
        payload: res.data
      });
    } catch (err) {
      if (err.response.msg) {
        dispatch({
          type: ARTICLE_ERROR,
          payload: err.response.msg
        })
      }
    }
  };

  // Delete article
  const deleteArticle = async id => {
    try {
      await axios.delete(`${API}/articles/${id}`);

      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update article
  const updateArticle = async articleFields => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `${API}/articles/${articleFields.id}`,
        articleFields,
        config
      );

      dispatch({
        type: UPDATE_ARTICLE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Add new view to article
  const NewViewArticle = async slug => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `${API}/articles/newView/${slug}`,
        config
      );

      dispatch({
        type: UPDATE_NEW_VIEW_ARTICLE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Add new Like to article
  const NewLikeArticle = async id => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `${API}/articles/newLike/${id}`,
        config
      );

      dispatch({
        type: UPDATE_NEW_Like_ARTICLE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Set Current Article
  const setCurrentArticle = article => {
    dispatch({ type: SET_CURRENT_ARTICLE, payload: article });
  };

  // Clear Current Article
  const clearCurrentArticle = () => {
    dispatch({ type: CLEAR_CURRENT_ARTICLE });
  };

  return (
    <ArticleContext.Provider
      value={{
        article: state.article,
        articles: state.articles,
        sectionArticles: state.sectionArticles,
        mostVisitedArticles: state.mostVisitedArticles,
        latestArticles: state.latestArticles,
        currentArticle: state.currentArticle,
        loadingArticle: state.loadingArticle,
        error: state.error,
        getArticles,
        NewLikeArticle,
        getArticleById,
        getArticleBySection,
        getMostVisitedArticles,
        getLatestArticles,
        getArticleBySlug,
        addArticle,
        updateArticle,
        NewViewArticle,
        deleteArticle,
        setCurrentArticle,
        clearCurrentArticle
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
