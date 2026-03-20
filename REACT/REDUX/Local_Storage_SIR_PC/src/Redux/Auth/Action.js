export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILUER = 'LOGIN_FAILUER';

export const REMOVE_TOKEN = 'REMOVE_TOKEN';

import axios from 'axios';

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

 return axios
    .post('https://reqres.in/api/login', userData, {
      headers: {
        'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
      },
    })
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { users: 'hello', token: res.data.token },
      }),
    )
    .catch((err) => {
      console.log('🚀 ~ err:', err);

      dispatch({ type: LOGIN_FAILUER });
    });
};
