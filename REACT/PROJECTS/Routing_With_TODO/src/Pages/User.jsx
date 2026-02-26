import React, { useState } from 'react'
import { getData } from '../Api/getData';

export const User = () => {
    const [user,setUser]=useState([]);

    React.useEffect(()=>{
        getData('Users')
        .then((res)=>{
            return setUser(res.data)
        })
        .catch((err)=> console.log(err))
    },[])
  return (
    <>
      <h1>Users</h1>

      {user && user.map((items)=>{
        return (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem"}}
            key={items.id}
            >
                <img src={items.avatar} alt={items.first_name}/>
                <span>{items.id}</span>
                <span>{items.email}</span>
                <p>
                    name {items.first_name} - {items.last_name}
                </p>
            </div>
        )
      })}
    </>
  )
}

