import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers/index';

const middlewares = [promise, thunk];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);