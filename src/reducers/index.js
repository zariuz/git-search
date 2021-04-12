import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import reposReducer from './reposReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  repos: reposReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
