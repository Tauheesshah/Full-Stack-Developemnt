import React from 'react'
import { NavLink } from 'react-router-dom'
import { AuthValContext } from '../Context/AuthContext'

export const Navbar = () => {

  const {setAuth}=React.useContext(AuthValContext)

  const data=[
    {to:'/',name:'home'},
    {to:'/about',name:'about'},
    {to:'/counter',name:'counter'},
    {to:'/todo',name:'todo'},
    {to:'/user', name:'user'},
    {to: '/Login', name :'Login'}
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
      <button onClick={()=>setAuth(false)}>Logout</button>
    </div>
  )
}


