import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import rootSagas from '../sagas';


export default function configureStore(initialState = {}) {
  const sagas = createSaga();
  const logger = createLogger({ predicate: (getState, action) => __DEV__ }); // eslint-disable-line
  const middlewares = [
    sagas,
    logger
  ];

  return {
    ...createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
    ),
    runSaga() {
      sagas.run(rootSagas)
    }
  }
}
