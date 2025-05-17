import React from 'react'
import { AuthContext } from './AuthContext'
import { useEffect } from 'react'
import { isAuthenticatedAPI } from '../utils/AuthAPIHelper'
import { useState } from 'react'

const AuthProviderWrapper = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const authCheck = async()=>{
      const { success } = await isAuthenticatedAPI();
     setIsAuthenticated(success)
    }

    useEffect(()=>{
        authCheck()
    },[isAuthenticated])

  return (
    <>
        <AuthContext.Provider value={{ isAuthenticated, authCheck }} >
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProviderWrapper
