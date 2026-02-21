import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  const data=[
    {to:'/',name:'home'},
    {to:'/about',name:'about'},
    {to:'/counter',name:'counter'},
    {to:'/todo',name:'todo'},
  ]

  return (
    <div
    style={{
      listStyle:"none",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      gap:"20px",
      textTransform:"capitalize",
      fontSize:"1.1rem",
      fontWeight:"normal",
      cursor:"pointer",
      
    }}
    >
      {data?.map((el,i)=>{
        return (
          <NavLink style={{
            textDecoration:"None",
            color:"black"
          }}
          to={el.to}
          key={i}          
          >
            {el.name}
          </NavLink>
        );
      })}
    </div>
  )
}


