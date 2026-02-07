import React, { createContext, useState,useEffect } from 'react'
import { GetLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userData,setUserData] = useState(null)
    useEffect(() => {
        const {employees,admin} = GetLocalStorage()
    setUserData({employees,admin})
    }, [])
    
  
  return (
    <div>
        <AuthContext.Provider value={userData}>
           {children}  
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider