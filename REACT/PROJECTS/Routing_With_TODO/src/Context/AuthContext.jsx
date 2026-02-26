import {createContext,useState} from 'react';

export const AuthValContext = createContext(null)

export const AuthContext = ({children}) => {
  const [auth,setAuth]=useState(false);
  return (
    <AuthValContext.Provider value={{auth,setAuth}}>
      {children}
    </AuthValContext.Provider>
  )
}


