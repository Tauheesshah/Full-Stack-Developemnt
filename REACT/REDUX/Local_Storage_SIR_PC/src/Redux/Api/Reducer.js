import * as types from './Action';

const initialValue = {
  userData: [],
  isLoading: false,
  isError: false,
  singlePageData: null,
};

const Reducer = (oldState = initialValue, { type, payload }) => {
  switch (type) {
    case types.USER_DATA_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.USER_DATA_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        userData: payload,
      };

    case types.USER_DATA_FAILUER:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    case types.SINGLE_USER_DATA_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        singlePageData: payload,
      };

    default:
      return oldState;
  }
};

export { Reducer };
