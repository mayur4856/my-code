import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup/';
import "./counter.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';


const CounterNum = () => {
    // useEffect(()=> {
    //     AOS.init({duration:"100", delay:"100"})
    // },[])
  return (
    <div className="counter-section">
        <div className="counter-wrap container">
            <ul className="counter-list shadow-box">
                <li className="cunter-item shadow-box" data-aos="fade-up">
                    <div className="number">
                        +<CountUp 
                        duration={3}
                        start={0} 
                        end={7}
                        >
                        </CountUp>
                    </div>
                    <p>Years<br /> Experience</p>
                </li>
                <li className="cunter-item shadow-box" data-aos="fade-up">
                    <div className="number">
                        +<CountUp 
                        duration={3}
                        start={0} 
                        end={25}
                        >
                        </CountUp>
                    </div>
                    <p>CLIENTS<br /> WORLDWIDE</p>
                </li>
                <li className="cunter-item shadow-box" data-aos="fade-up">
                    <div className="number">
                        <CountUp 
                        duration={3}
                        start={0} 
                        end={100}
                        >
                        </CountUp>%
                    </div>
                    <p>Client<br /> Satisfaction</p>
                </li>
                <li className="cunter-item shadow-box" data-aos="fade-up">
                    <div className="number">
                        +<CountUp 
                        duration={3}
                        start={0} 
                        end={50}
                        >
                        </CountUp>
                    </div>
                    <p>Total<br /> Projects</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CounterNum


