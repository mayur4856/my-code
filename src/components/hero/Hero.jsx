import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./hero.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const HeroSection = () => {
  // useEffect(()=> {
  //   AOS.init({duration:"1000", delay:"1000"})
  // },[])
  return (
    <div className="hero-main" data-aos="zoom-in">
      <div className="container">
        <div className="hero-wrap shadow-box">
          <div className="hero-img">
            <img src="./images/mayur-photo-new.png" alt="" />
          </div>
          <div className="hero-data">
              <div className="designation">a web designer</div>
              <h1 className="name"><span>Mayur</span><br /> Baroliya</h1>
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
