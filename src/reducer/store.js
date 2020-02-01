import { createStore } from 'redux';
import initialState from './initialState';

const store = createStore(reducer, initialState);

