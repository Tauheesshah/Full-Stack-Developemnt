import React from "react";
import { Button } from "./button";

export const Form = ({ data,button='submit' }) => {
  const [formData, setFormData] = React.useState(() => {
    return data.reduce((acc, curr) => {
      acc[curr.name] = "";
      return acc;
    }, {});
  })
  console.log("🚀 ~ formData:", formData)

 const handleChange=(e)=>{
   const {name,value}=e.target;
   setFormData({...formData,[name]:value})
  //  console.log('name,value',name,value);  
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let flag=false;
    for(let key in formData){
      if(formData[key].lenght>0){
        flag=true;
      }else{
        flag=false;
      }
    }
    if(flag){
      localStorage.setItem('form',JSON.stringify(formData))
    }else{
      alert("please fill the form in the correct way")
    }
  }
  return (
    <>
      <form>
        {data.map((el, i) => {
          return (
            <div key={i + 1}>
              <label htmlFor={el.id}>{el.name}</label>
              {el.type === "textarea" ? (
                <textarea
                  name={el.name}
                  placeholder={el.placeholder}
                  id={el.id}
                  rows="10"
                  cols="50"
                ></textarea>
              ) : (
                <input
                  type={el.type}
                  name={el.name}
                  placeholder={el.placeholder}
                  id={el.id}
                  onChange={handleChange}
                />
              )}
            </div>
          );
        })}
        <Button onclick={handleSubmit} value={button}/>
      </form>
    </>
  );
};