import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Suspense,lazy } from 'react'

const AppRoutes = () => {

    const SignUpPage = lazy(()=>import('../pages/SignUpPage'))
    const LoginPage = lazy(()=> import('../pages/LoginPage'))
    const HomePage = lazy(()=> import('../pages/HomePage'))

  return (
    <>
        <BrowserRouter>
            <Suspense >
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/signup' element={<SignUpPage/>} />
                    <Route path='/login' element={<LoginPage/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes
