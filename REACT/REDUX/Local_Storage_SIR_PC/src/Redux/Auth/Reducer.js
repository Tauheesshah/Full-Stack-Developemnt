import { loadData, saveData, removeData } from '../../Data/localStorage';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILUER,
  REMOVE_TOKEN,
} from './Action';

const key = 'token';

let verify = loadData(key);

const initialValue = {
  user: [],
  isAuth: verify ? true : false,
  isToken: verify || '',
  isLoading: false,
  isError: false,
};

const Reducer = (oldState = initialValue, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };

    case LOGIN_SUCCESS:
      saveData(key, payload.token);

      return {
        ...oldState,
        isLoading: false,
        isError: false,
        isAuth: true,
        user: [...oldState.user, payload.users],
        isToken: payload.token,
      };

    case LOGIN_FAILUER:
      return {
        ...oldState,
        isError: true,
        isLoading:false
      };

    case REMOVE_TOKEN:
      removeData(key);
      return {
        ...oldState,
        isAuth: false,
        isToken: '',
        isLoading: false,
        isError: false,
      };

    default:
      return oldState;
  }
};

export { Reducer };
