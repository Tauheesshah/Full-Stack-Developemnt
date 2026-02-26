import React, { useContext, useState } from 'react'
import { AuthValContext } from '../Context/AuthContext';

export const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const {auth ,setAuth} = useContext(AuthValContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email.trim()=== '' && pass.trim()=== '') return;
        setAuth(true)
    }
  return (
    <>
      <h1>Login</h1>
      <form style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem"}} 
      onSubmit={handleSubmit}>
        <label htmlFor='email'></label>
        <input type='email' name='email' id='email' onChange={(e)=>setEmail(e.target.value)}></input>

        <label htmlFor='pass'></label>
        <input type='password' name='pass' id='pass' onChange={(e)=>setPass(e.target.value)}></input>

        <button type='submit'>submit</button>
      </form>
    </>
  )
}
