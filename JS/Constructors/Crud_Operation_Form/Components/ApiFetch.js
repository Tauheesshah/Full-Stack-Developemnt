export const ApiCall=()=>{
    return fetch('https://localhost:8000/userData')
    .then((res)=>res)
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
};

export const BASE_URL='https://localhost:8000/userData'