import React from 'react'
import CustomFrom from './CustomFrom'

const Form = () => {

    const style = {display:"flex", alignItems:"start", flexDirection:"column" , gap:"10px", width:"13%" , margin:"auto"};

    const dataForm = [
        {id:"name", type:"text",placeholder:"Enter Your name",name:"Name"},
        {id:"email", type:"email",placeholder:"Enter Your Email",name:"Email"},
        {id:"password", type:"password",placeholder:"Enter Your password",name:"Password"},
        {id:"Phone", type:"tel",placeholder:"Enter Your Phone",name:"Phone"},
        {id:"address", type:"textarea",placeholder:"Enter Your address",name:"Address" },
    ]

  return (
    <CustomFrom style={style} data={dataForm} />
  )
}

export default Form
