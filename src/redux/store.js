import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
const middlewares = [  
  promiseMiddleware(),
   thunk,  ];
if (__DEV__) { //eslint-disable-line
   //  const logger = require('redux-logger'); 
middlewares.push(createLogger()); }
//const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //----removed at last of the project
export default createStore(
    reducers,
     undefined,
    //enhancers(applyMiddleware(...middlewares))//autoRehydrate()),
    compose(applyMiddleware(...middlewares), autoRehydrate()),
  );