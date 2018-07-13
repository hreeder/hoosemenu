import { combineReducers, createStore, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import menu from './menu'
import preferences from './preferences'
import tab from './tab'

export default createStore(combineReducers({
    menu,
    preferences,
    tab
}), applyMiddleware(promise(), createLogger()));