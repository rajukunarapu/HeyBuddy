import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import NavBar from '../layouts/NavBar'
import MainWrapper from '../features/Home/components/MainWrapper'

const HomePage = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <MainWrapper/>
      <Footer/>
    </>
  )
}

export default HomePage
