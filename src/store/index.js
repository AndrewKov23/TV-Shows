import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {
  articles: [],
  loading: true,
  error: false,
  totalPages: null,
  currentPage: null,
  pageType: null,
};

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk, logger)),
);

export default store;
