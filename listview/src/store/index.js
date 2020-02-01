import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';


export default function configureStore(initialState = {}) {
  const middlewares = [];

  if (__DEV__) {
    middlewares.push(createLogger());
  }

  return {
    ...createStore(rootReducer, initialState, applyMiddleware(...middlewares))
  }
}

