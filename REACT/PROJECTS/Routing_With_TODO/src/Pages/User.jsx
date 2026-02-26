import React, { useContext } from 'react';

import { getData } from '../Api/getData';
import { Link, useSearchParams } from 'react-router-dom';

import { AuthValContext } from '../Context/AuthContext';

const CalcPageVal = (val) => {
  let vals = +val;

  if (typeof vals === 'number' && vals <= 0 && !vals) {
    return (vals = 1);
  }
  return vals;
};

export const User = () => {
  const { loading, setLoading, error, setError } = useContext(AuthValContext);

  const [user, setUser] = React.useState([]);
  const [res, setRes] = React.useState({});

  const [searchParam, setSearchParam] = useSearchParams();
  console.log('🚀 ~ searchParam:', searchParam.get('page'));

  let initialPage = CalcPageVal(searchParam.get('page'));

  const [page, setPage] = React.useState(initialPage);

  React.useEffect(() => {
    getData(`/users?page=${page}`)
      .then((res) => {
        setError(false);
        setLoading(true);
        setRes(res);
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('🚀 ~ err:', err);
        setError(true);
      });
  }, [page]);

  React.useEffect(() => {
    setSearchParam({ page });
  }, [page]);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>something went wrong!!!!</h1>;
  }

  return (
    <>
      <h1>User</h1>

      <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}>
        prev
      </button>
      <span style={{ padding: '1rem' }}>{page}</span>
      <button
        disabled={page === res.total_pages}
        onClick={() => setPage((prev) => prev + 1)}
      >
        next
      </button>

      {user &&
        user.map((items) => {
          return (
            <Link
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
              }}
              key={items.id}
              to={`/users/${items.id}`}
            >
              <img src={items.avatar} alt={items.first_name} />
              <span>{items.id}</span>
              <span>{items.email}</span>
              <p>
                name {items.first_name} - {items.last_name}
              </p>
            </Link>
          );
        })}

      
    </>
  );
};