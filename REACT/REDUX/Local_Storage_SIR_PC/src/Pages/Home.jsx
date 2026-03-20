import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { userData } from '../Redux/Api/Action';
export const Home = () => {
  const value = useSelector((store) => store.user.userData);
  const dispatch = useDispatch();
  React.useEffect(() => {
    userData(dispatch);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1rem',
      }}
    >
      {value &&
        value.map((el) => (
          <Link
            to={`single/${el.id}`}
            key={el.id}
            style={{
              border: '1px solid black',
              padding: '0.5rem',
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <img src={el.avatar} alt={el.first_name} />
            <h5>{el.id}</h5>
            <p>
              {el.first_name} - {el.last_name}
            </p>
            <h4>{el.email}</h4>
          </Link>
        ))}
    </div>
  );
};
