import { legacy_createStore } from 'redux';
import { Reducer } from '../Redux/Reducer';

const ownStore = legacy_createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export { ownStore };