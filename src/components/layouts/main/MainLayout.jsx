import React from 'react'
import  Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
      <div className="page-wrapper">
        <Header />
        <div className="body-wrapper">
            <Outlet />
        </div>
        <Footer />
      </div>
  )
}

export default MainLayout