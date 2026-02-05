import React from 'react'

export const Data = ({props}) => {
    const {data}=props;
  return (
    <>
      {data && data?.map((el)=>{
        return(
            <div key={el.id}>
                <h2>{el.id}</h2>
                <h2>{el.title}</h2>
                <h3>{el.completed ? 'true':'false'}</h3>
            </div>
        )
      })}
    </>
  )
}

