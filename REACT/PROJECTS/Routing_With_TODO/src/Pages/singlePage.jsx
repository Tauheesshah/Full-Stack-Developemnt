import React, { useContext } from 'react';
import { getData } from '../Api/getData';
import { useParams } from 'react-router-dom';
import { AuthValContext } from '../Context/AuthContext';

export const SinglePage = () => {
  const { loading, setLoading, error, setError } = useContext(AuthValContext);

  const params = useParams();
  console.log('🚀 ~ params:', params);

  const [singleData, setSingleData] = React.useState({});

  React.useEffect(() => {
    setLoading(true);

    getData(`/users/${params.paramId}`)
      .then((res) => {
        setError(false);
        
        // console.log('this is from single page', res);
        setSingleData(res.data);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (error) {
    return <h1>something went wrong!!!!</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
        single page{' '}
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1rem',
        }}
        key={singleData.id}
        to={`/users/${singleData.id}`}
      >
        <img src={singleData.avatar} alt={singleData.first_name} />
        <span>{singleData.id}</span>
        <span>{singleData.email}</span>
        <p>
          name {singleData.first_name} - {singleData.last_name}
        </p>
      </div>
    </>
  );
};