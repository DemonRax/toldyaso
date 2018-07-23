// @flow
import { combineReducers } from 'redux';
import { listReducer } from './ListReducer';

export type AppState = { some: any };

export const rootReducer = combineReducers({
    list: listReducer
});
