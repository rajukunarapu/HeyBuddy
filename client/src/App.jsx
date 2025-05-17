import React from 'react'
import AppRoutes from './routes/AppRoutes'
import AuthProviderWrapper from './context/AuthProviderWrapper'

const App = () => {
  return (
    <>
      <AuthProviderWrapper>
        <AppRoutes/>
      </AuthProviderWrapper>
    </>
  )
}

export default App
