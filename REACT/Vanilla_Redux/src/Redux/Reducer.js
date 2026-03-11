import * as types from './Action'
import React from 'react'

const initialValue = {
    amount:0,
    isError:false,
    isComplete:false
}
export const Reducer = (oldstate = initialValue,{type,payload}) => {
  switch (type) {
    case type.DEPOSITE:
        return{
            ...oldstate , amount:oldstate.amount+payload,
        }
    case types.WITHDRAW:
        return{
            ...oldstate,amount:oldstate.amount-payload
        }
  
    default:
        return oldstate;
  }
}

 
