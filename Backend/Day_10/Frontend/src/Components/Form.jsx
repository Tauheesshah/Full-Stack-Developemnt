import React from 'react'
import { useState } from 'react'

export const Form = () => {

    const [FormData,setFormData] = useState({
        name: '',
        age: '',
        married: '',
        organization: '',
        hobbies: []
    })   

    const change =(e)=>{
        const  { name, value }   = e.target;
        setFormData({ ...FormData,  [name]: value });  
    }
   console.log(FormData)
    const  handleHobbiesChange = ()=>{
        console.log("hobies")
    }




  return (
    <div>
      <h1>User Form</h1>
      <label>Name</label>
      <input type='text' name="name"  onChange={change} placeholder='Enter your Name' /> <br/>

      <label>Age</label>
      <input type='number'name="age" onChange={change} placeholder='Enter your Age' /> <br/>

      <label>Married</label>
        <input type="radio" name="isActive" value="true"/> Yes 
        <input type="radio" name="isActive" value="false"/> No  <br/> 

      <label>Organization</label>
      <input type='text' name="organization" onChange={change} placeholder='Enter your Organization Name' /><br/>

      <label>Hobbies : </label>
      <div>
        <label>
          <input type="checkbox" value="cricket" onChange={handleHobbiesChange}/> Cricket
        </label>

        <label>
          <input type="checkbox" value="football" onChange={handleHobbiesChange}/> football
        </label>

        <label>
          <input type="checkbox" value="reading" onChange={handleHobbiesChange}/> reading
        </label>

        <label>
          <input type="checkbox" value="coding" onChange={handleHobbiesChange}/> coding
        </label>
        
      </div>

      <button>Submit</button>
    </div>
  )
}

