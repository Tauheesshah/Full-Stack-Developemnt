import React, { useState } from 'react'

const CustomFrom = ({style,data}) => {
    const[formData,setFormData]=useState(()=>{
        return data.reduce((acc,curr)=>{
            acc[curr.name]=""
            return acc
        },{})
    })
  return (
    <>
        <form action='' style={style}>

            {data.map((items,index)=>{
                return(
                    <div key={index}>
                        <label htmlFor={items.id}>{items.name}</label>
                        <input id={items.id} type={items.type} placeholder={items.placeholder} name={items.name}/>
                    </div>
                )
            })}

            <button>Submit / Register</button>
        </form>
    </>
  )
}

export default CustomFrom
