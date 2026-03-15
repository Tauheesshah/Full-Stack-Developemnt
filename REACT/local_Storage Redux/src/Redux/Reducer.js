import { loadData, saveData } from '../Data/localStorage';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILUER } from './Action';

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
      };

    case LOGIN_SUCCESS:
      saveData(key, payload.token);

      return {
        ...oldState,
        isLoading: false,
        isAuth: true,
        user: [...oldState.user, payload.users],
        isToken: payload.token,
      };

    case LOGIN_FAILUER:
      return {
        ...oldState,
        isError: true,
      };

    default:
      return oldState;
  }
};

export { Reducer };