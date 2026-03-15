import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_FAILUER, LOGIN_REQUEST, LOGIN_SUCCESS } from '../Redux/Action';

import axios from 'axios';

export const Login = () => {
  const dispatch = useDispatch();

  const value = useSelector((store) => store.isLoading);

  const [userValue, setUserValue] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: LOGIN_REQUEST });
    axios
      .post('https://reqres.in/api/login', userValue, {
        headers: {
          'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
        },
      })
      .then((res) =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { users: userValue, token: res.data.token },
        }),
      )
      .catch((err) => {
        console.log('🚀 ~ err:', err);

        dispatch({ type: LOGIN_FAILUER });
      });
  };

  if (value) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: '30vh',
          gap: '1rem',
        }}
      >
        <div>
          <label htmlFor="">email</label>{' '}
          <input type="text" name="email" onChange={(e) => handleChange(e)} />
        </div>

        <div>
          <label htmlFor="">password</label>{' '}
          <input
            type="text"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};