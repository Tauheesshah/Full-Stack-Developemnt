import * as types from './Action'
import React from 'react'

const Reducer = (oldstate ,{type,payload}) => {
  switch (type) {
    case type.DOUBLE:
        return{
            ...oldstate , amount:oldstate.amount*2,
        }
    case types.DEPOSITE:
        return{
            ...oldstate,amount:oldstate.amount+payload
        }
    case types.WITHDRAW:
        return{
            ...oldstate,amount:oldstate.amount-payload
        }
    default:
        return oldstate;
  }
}
export{Reducer}
 
