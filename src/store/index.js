

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

import todoReducer from './reducer/todo';
import formReducer from './reducer/form';

const store = createStore(combineReducers({todoReducer,formReducer}), composeWithDevTools(applyMiddleware(thunk,logger)));

export default store;