import { SEARCH_SHOW, GET_FILTER, ERROR, SORT_SHOW, LOAD_PAGES } from "../constants/action-types";
import initialState from "../store/index"

function rootReducer(state = initialState, action) {
  
  switch(action.type ){
    case SEARCH_SHOW:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };
    case GET_FILTER:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };
      case SORT_SHOW:
      return {
        ...state,
        articles: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        articles: [] 
      };
    case LOAD_PAGES:
      return {
        ...state, 
        totalPages: action.totalPages, 
        currentPage: action.currentPage
      };
    default:
     return state;
  }
}

export default rootReducer;