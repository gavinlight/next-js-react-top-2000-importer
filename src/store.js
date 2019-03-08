import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as appReducers from 'ducks';
// import * as api from 'services/api';
import isServer from 'services/isServer';

export default (initialState = {}) => {
  // let middleware = applyMiddleware(thunk.withExtraArgument(api));
  const reducers = combineReducers({ ...appReducers });

  // if (
  //   !__PROD__
  //   && !isServer
  //   && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function'
  // ) {
  //   middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
  // }

  return createStore(reducers, initialState);
};
