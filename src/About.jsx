import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="about-main">
        <div className="container">
          <div className="about-wrap">
            <div className="about-left">
              <div className="about-left-wrap shadow-box">
                <div className="profile-image">
                  <img src="./images/mayur-photo-new.png" alt="" />
                </div>
                <h3 className="name">Mayur Baroliya</h3>
                <div className="naming">@mayurbaroliya</div>
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
                <NavLink className="site-btn" to="/contact">Contact Me</NavLink>
              </div>
            </div>
            <div className="about-right">
              <div className="col-info">
                <h3 className='title'>About Me</h3>
                <p className='description'>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.</p>
              </div>
              <div className="col-info">
                <h3 className='title'>EXPERIENCE</h3>
                <div className="years">2007 - 2017</div>
                <div className="designation">Front-End Developer</div>
                <div className="company">Multidots</div>
                <p className='description'>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
              </div>
              <div className="col-info">
                <h3 className='title'>Education</h3>
                <div className="years">2007 - 2017</div>
                <div className="designation">Post Graduate Diploma in Computer Application.</div>
                <div className="company">University of California</div>
                <p className='description'>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
              </div>
              <div className="skills">
                <h3>Skills</h3>
                <ul className="skills-list">
                  <li>
                    <div className="percent">95%</div>
                    <div className="skill-name">HTML</div>
                    <p className="desc">Non enim praesent</p>
                  </li>
                  <li>
                    <div className="percent">95%</div>
                    <div className="skill-name">Css</div>
                    <p className="desc">Non enim praesent</p>
                  </li>
                  <li>
                    <div className="percent">95%</div>
                    <div className="skill-name">Javascript</div>
                    <p className="desc">Non enim praesent</p>
                  </li>
                  <li>
                    <div className="percent">95%</div>
                    <div className="skill-name">React</div>
                    <p className="desc">Non enim praesent</p>
                  </li>
                  <li>
                    <div className="percent">95%</div>
                    <div className="skill-name">WordPress</div>
                    <p className="desc">Non enim praesent</p>
                  </li>
                  <li>
                    <div className="percent">95%</div>
                    <div className="skill-name">Figma</div>
                    <p className="desc">Non enim praesent</p>
                  </li>
                  <li>
                    <div className="percent">95%</div>
                    <div className="skill-name">Adobe XD</div>
                    <p className="desc">Non enim praesent</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

