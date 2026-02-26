import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthValContext } from '../Context/AuthContext'

export const PrivateRoutes = ({children}) => {
    const {auth} =useContext(AuthValContext)
    if(!auth){
        return <Navigate to="/Login"/>
    }
    return children;
  
}


