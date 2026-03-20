import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sindleUserData } from '../Redux/Api/Action';

export const SinglePage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { singlePageData } = useSelector((store) => store.user);

  React.useEffect(() => {
    dispatch(sindleUserData(params.id));
    //let findID = singlePageData.find((el) => el.id === params.id);      ------ This is Second Approach --------
  }, [params.id]);

  return (
    <>
      {singlePageData && (
        <div
          key={singlePageData.id}
          style={{
            border: '1px solid black',
            padding: '0.5rem',
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <img src={singlePageData.avatar} alt={singlePageData.first_name} />
          <h5>{singlePageData.id}</h5>
          <p>
            {singlePageData.first_name} - {singlePageData.last_name}
          </p>
          <h4>{singlePageData.email}</h4>
        </div>
      )}
    </>
  );
};
