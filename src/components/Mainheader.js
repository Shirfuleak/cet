import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router'
import Footer from './footer/Footer'

const Mainheader = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Mainheader;