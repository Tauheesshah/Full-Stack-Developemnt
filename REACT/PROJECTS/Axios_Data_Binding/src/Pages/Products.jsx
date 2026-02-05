import React, { useEffect, useState } from "react";
import { apiData } from "../Utils/API";
import { Link } from "react-router-dom";


export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiData.get("/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
        <h2>Products</h2>
        <div
        style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '4em',
            }}
        >

          {data.map((el) => (
            <div key={el.id}>
                <h2>{el.id}</h2>
                {/* <img width="150" src={el.image} alt={el.category} /> */}
                <Link to={`/products/${el.id}`}>
                    <img width="150" src={el.image} alt={el.category} />
                </Link>
                {/* <h3>{el.title}</h3> */}
                {/* <h4>{el.category}</h4> */}
                {/* <h4>{el.description}</h4> */}
              </div>
          ))}
        </div>
    </>
  );
};

