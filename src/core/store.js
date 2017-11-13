import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apples } from './reduser';

const store = createStore(combineReducers({ apples }), composeWithDevTools());

export default store;
