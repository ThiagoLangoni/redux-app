import {createStore} from 'redux';
import allReducers from '../reducers'

export const Store = createStore(allReducers)