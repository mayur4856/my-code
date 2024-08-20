import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
    const [openMenu, setopenMenu] = useState(false);
  return (
    <nav>
        <div className={openMenu ? "main-navigation is-menu-visible" : "main-navigation" }>
            <ul className='nav-menu'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div className="hamburger-menu">
                <CgMenu className='menu-icons open-icon'
                    onClick={() => setopenMenu(true)}
                />
                <CgClose className='menu-icons close-icon' 
                    onClick={() => setopenMenu(false)}
                />
            </div> 
        </div>
    </nav>
  )
}

export default Navbar
