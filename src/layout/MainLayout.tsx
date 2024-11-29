import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Planstarifs from "../pages/Tarifs"

const MainLayout = () => {
  return (
    <>
    {/* <Header /> */}
    {/* <Outlet /> */}
    <Planstarifs/>
    <Footer />
    
    </>
  )
}

export default MainLayout