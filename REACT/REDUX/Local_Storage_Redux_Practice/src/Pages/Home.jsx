import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {userData} from '../Redux/Api/Action'
// import {useDispatch,useSelector} from 'react-redux'

export const Home = () => {
  const value=useSelector((store)=>store.user.userData)
  const dispatch = useDispatch();
  React.useEffect(()=>{
    userData(dispatch)
  },[])
  console.log(value)
  return <div>Home</div>;
};