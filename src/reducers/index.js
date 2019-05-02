import { LOAD_SHOW, ERROR, LOAD_PAGES, IS_LOADING } from '../constants/action-types';
import initialState from '../store/index';

function rootReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case LOAD_SHOW:
      return {
        ...state,
        articles: action.payload,
        pageType: action.pageType,
        loading: false,
      };
    case LOAD_PAGES:
      return {
        ...state,
        totalPages: action.totalPages,
        currentPage: action.currentPage,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        articles: [],
      }; 
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      }; 
    default:
      return state;
  }
}

export default rootReducer;
