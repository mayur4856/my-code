import React from 'react'
import { NavLink } from 'react-router-dom'
import "./hero.css";

const HeroSection = () => {
  return (
    <div className="hero-main">
      <div className="container">
        <div className="hero-wrap shadow-box">
          <div className="hero-img">
            <img src="./images/mayur-photo-new.png" alt="" />
          </div>
          <div className="hero-data">
              <div className="designation">a web designer</div>
              <h1 className="name">Mayur <br /> Baroliya</h1>
              <p>I am a Web Designer based in Ahmedabad India.</p>
              <NavLink className="circle-pattern" to="/contact">
                <img src="./images/circle-pattern.svg" alt="" />
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
