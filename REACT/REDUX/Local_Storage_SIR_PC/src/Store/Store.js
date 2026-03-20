import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { thunk } from 'redux-thunk';

import { Reducer as authReducer } from '../Redux/Auth/Reducer';
import { Reducer as todoReducer } from '../Redux/todos/Reducer';
import { Reducer as userReducer } from '../Redux/Api/Reducer';

const rootTerminal = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  user: userReducer,
});

// const customMiddleware = (store) => (next) => (action) => {
//   return typeof action === 'function' ? action(store) : next(action);
// };

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const ownStore = legacy_createStore(rootTerminal, enhancer);

export { ownStore };

//dev tool ✅

// combine reducer ✅

// thunk ||  custom middleware

// what is compose && enhancers?
