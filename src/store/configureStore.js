import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const middlewares = [];
middlewares.push(thunk);

export default function configureStore() {
  return compose(applyMiddleware(...middlewares))(createStore)(rootReducer)
}