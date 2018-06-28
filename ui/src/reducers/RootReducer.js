// @flow
import { combineReducers } from "redux";
import { someReducer } from '../reducers/SomeReducer'

export type State = {   some: any };

export const rootReducer = combineReducers({
    some: someReducer
});
