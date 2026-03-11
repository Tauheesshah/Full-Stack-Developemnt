import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'

import { DEPOSITE,DOUBLE,WITHDRAW } from '../Redux/Action'

import {myStore} from '../Redux/Store'

export const Account = () => {

  const dispatch = useDispatch();
  const value = useSelector((store)=>{
    return store.amount
  })

    const handleDeposite = ()=>{
      dispatch({type:DEPOSITE,payload:10})
  }


  const handleWithdraw = ()=>{
      dispatch({type:WITHDRAW,payload:20})
  }

  const handleDouble = ()=>{
      dispatch({type:DOUBLE})
  }

  


  return (
    <>
      <h1>ACCOUNT {mystore.getState().amount}</h1>
      <button onClick={handleDeposite}>Deposite</button>
      <button onClick={handleWithdraw}>Deposite</button>
      <button onClick={handleDouble}>DOUBLE</button>

    </>
  )
}

