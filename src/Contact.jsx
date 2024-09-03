import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebookF, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { VscMail, VscLocation } from "react-icons/vsc";


const Contact = () => {
  return (
    <div className="contact-main">
      <div className="container">
          <div className="contact-columns">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <div className="info-list">
                <div className="info-list-item">
                  <div className="icon-box shadow-box">
                    <VscMail />
                  </div> 
                  <div className="info-cont">
                    <span>MAIL US</span>
                    <h5>info@bluebase.com</h5>
                  </div>   
                </div>
                <div className="info-list-item">
                  <div className="icon-box shadow-box">
                    <FaPhoneAlt />
                  </div> 
                  <div className="info-cont">
                    <span>Contact Us</span>
                    <h5>+1 504-899-8221</h5>
                  </div>   
                </div>
                <div className="info-list-item">
                  <div className="icon-box shadow-box">
                    <VscLocation />
                  </div> 
                  <div className="info-cont">
                    <span>Location</span>
                    <h5>22 Baker Street, Texas United States W1U 3BW</h5>
                  </div>   
                </div>
              </div>
              <h3>Social Info</h3>
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
            </div>
            <div className="contact-wrap shadow-box">
              <h1>Let’s work <span>together.</span></h1>
              <form action="" method="POST" className="contact-form">
                <div className="field-wrap username">
                  <input 
                    type="text" 
                    name="username" 
                    placeholder="Name *" 
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="field-wrap email">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email *" 
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="field-wrap phone">
                  <input type="tel" name="phone" placeholder="Phone *" required />
                </div>
                <div className="field-wrap textarea">
                  <textarea 
                    name="message" 
                    cols="30" 
                    rows="6" 
                    autoComplete="off"
                    placeholder="Your Message *"
                    required>
                  </textarea>
                </div>
                <div className="field-wrap submit">
                  <input
                    type="submit" 
                    value="Send" 
                  />
                </div>
              </form>
              <NavLink className="star-pattern" to="/contact">
                <img src="./images/star-pattern.png" alt="" />
              </NavLink>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Contact
