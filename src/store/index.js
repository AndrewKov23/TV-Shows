import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
import logger from 'redux-logger';
// import { GET_FILTER } from "../constants/action-types";


const initialState = {
  articles: [],
  loading: true,
  error: false,
  world: null,
  totalPages: null,
  currentPage: null
};

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk, logger))
);

export default store;