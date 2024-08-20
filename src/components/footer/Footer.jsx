import React from 'react'
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-wrap">
          <NavLink className="footer-logo" to="/">
            <img src="./images/site-logo.svg" alt="" />
          </NavLink>
          <ul className='footer-menu'>
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
          <ul className="social-icons">
            <li>
              <a className="shadow-box" href="https://www.facebook.com/" target='_blank'>
                <FaFacebookF className="icons" />
              </a>
            </li>
            <li>
              <a className="shadow-box" href="https://www.instagram.com/" target='_blank'>
                <FaInstagram className="icons" />
              </a>
            </li>
            <li>
              <a className="shadow-box" href="https://www.youtube.com/" target='_blank'>
                <FaYoutube className="icons" />
              </a>
            </li>
          </ul>
          <p className="copyright">© {new Date().getFullYear()} <span>Mayur Baroliya</span>. All Rights Reserved</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer
