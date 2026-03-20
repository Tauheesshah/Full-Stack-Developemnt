import axios from 'axios';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const USER_DATA_FAILUER = 'USER_DATA_FAILUER';
export const SINGLE_USER_DATA_SUCCESS = 'SINGLE_USER_DATA_SUCCESS';

const getUserData_success = (value) => {
  return { type: USER_DATA_SUCCESS, payload: value };
};
const getUserData_request = () => {
  return { type: USER_DATA_REQUEST };
};
const getUserData_failuer = () => {
  return { type: USER_DATA_FAILUER };
};

const get_Single_UserData_success = (value) => {
  return { type: SINGLE_USER_DATA_SUCCESS, payload: value };
};

const userData = (dispatch) => {
  dispatch(getUserData_request());
  return axios({
    method: 'GET',
    url: 'api/users',
    baseURL: 'https://reqres.in',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
    },
  })
    .then((res) => dispatch(getUserData_success(res.data.data)))
    .catch(() => dispatch(getUserData_failuer()));
};

const sindleUserData = (id) => (dispatch) => {
  dispatch(getUserData_request());
  return axios({
    method: 'GET',
    url: `api/users/${id}`,
    baseURL: 'https://reqres.in',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
    },
  })
    .then((res) => dispatch(get_Single_UserData_success(res.data.data)))
    .catch(() => dispatch(getUserData_failuer()));
};

export { userData, sindleUserData };
