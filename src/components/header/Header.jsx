import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../header/Navbar';
import LightDarkmode from '../header/LightDarkmode';
import "./header.css"

const Header = () => {


  return (
    <header className='site-header'>
        <div className="container">
          <div className="header-wrap">
            <NavLink className="logo" to="/">
                <img src="./images/site-logo.svg" alt="" />
            </NavLink>
            <Navbar />
            <LightDarkmode />
          </div>
        </div>
    </header>
  )
}

export default Header
