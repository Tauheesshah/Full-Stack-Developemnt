import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Form } from './Components/form'
import { Button } from './Components/button'

export function App() {

  const formData = [
    {
      type:"text",
      name:"userName",
      placeholder:"enter your Name.....",
      id:"username",
    },
    {
      type:"email",
      name:"userEmail",
      placeholder:"enter your email.....",
      id:"useremail",
    },
    {
      type:"curent-password",
      name:"userPassword",
      placeholder:"enter your password.....",
      id:"userpassword",
    },
    {
      type:"textArea",
      name:"userAddress",
      placeholder:"enter your Address.....",
      id:"useraddress",
    },
    {
      type:"tel",
      name:"userPhone",
      placeholder:"enter your Phone.....",
      id:"userphone",
    },
    
  ]

  return (
    <>
      <Form data={formData}/>
      {/* <Button style={{padding:'0.5rem 2rem', background:'red'}} value={'Login'} /> */}
      {/* <Button style={{padding:'0.5rem 2rem', background:'red'}} value={'signin'} /> */}

    </>
  )
}
