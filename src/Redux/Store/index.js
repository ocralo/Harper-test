import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from './../Reducer/index';
import thunk from 'redux-thunk';

const middleware = thunk;

const composeEnhancers = compose;

const configureStore = createStore(
	Reducer,
	composeEnhancers(applyMiddleware(middleware)),
);

export default configureStore;
