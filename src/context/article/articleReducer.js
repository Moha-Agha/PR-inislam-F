import {
  GET_ARTICLE,
  GET_ARTICLES,
  GET_SECTION_ARTICLES,
  GET_MOST_VISITED_ARTICLES,
  GET_LATEST_ARTICLES,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  UPDATE_NEW_VIEW_ARTICLE,
  UPDATE_NEW_Like_ARTICLE,
  DELETE_ARTICLE,
  SET_CURRENT_ARTICLE,
  CLEAR_CURRENT_ARTICLE,
  ARTICLE_ERROR
} from '../types';



export default (state, action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
        loadingArticle: false
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loadingArticle: false
      };
    case GET_SECTION_ARTICLES:
      return {
        ...state,
        sectionArticles: action.payload,
        loadingArticle: false
      };
    case GET_MOST_VISITED_ARTICLES:
      return {
        ...state,
        mostVisitedArticles: action.payload,
        loadingArticle: false
      };
    case GET_LATEST_ARTICLES:
      return {
        ...state,
        latestArticles: action.payload,
        loadingArticle: false
      };
    case ADD_ARTICLE:
      return {
        ...state,
        article: [action.payload],
        loadingArticle: false
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        loadingArticle: false
      };
    case UPDATE_NEW_VIEW_ARTICLE:
      return {
        ...state,
        loadingArticle: false
      };
    case UPDATE_NEW_Like_ARTICLE:
      return {
        ...state,
        loadingArticle: false
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          message => message._id !== action.payload
        ),
        loadingArticle: false
      };
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        currentArticle: action.payload
      };
    case CLEAR_CURRENT_ARTICLE:
      return {
        ...state,
        currentArticle: null
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
