/*

1. useEffect [to handle the sideEffect  || Api_calling]
2. state manage each url

*/
// $ actions

import { useEffect, useReducer } from "react";
import axios from "axios";

const API_REQUEST = "API_REQUEST";
const API_SUCCESS = "API_SUCCESS";
const API_FAILURE = "API_FAILURE";

// initialvalue

const initialState = {
  ApiValue: null,
  isLoading: false,
  isError: false,
};

// Reducer

const Reducer = (oldState, { type, payload }) => {
  switch (type) {
    
    case API_REQUEST:
      return {
        ...oldState,
        ApiValue: null,
        isLoading: true,
      };

    case API_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        ApiValue: payload,
      };

    case API_REQUEST:
      return {
        ...oldState,
        ApiValue: null,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};

export const useFetch = (url, key) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    dispatch({ type: API_REQUEST });
    axios
      .get(url, key || "")
      .then((res) => dispatch({ type: API_SUCCESS, payload: res }))
      .catch(() => dispatch({ type: API_FAILURE }))
      .finally(console.log("done"));
  }, [url]);

  return state;
};
