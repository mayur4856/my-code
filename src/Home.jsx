import React, { useEffect } from 'react';
import HeroSection from "./components/hero/Hero"; 
import TechnoLogies from "./components/technologies/TechnoLogies";
import CounterNum from './components/counter/CounterNum';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=> {
    AOS.init({duration:"1000", delay:"500"})
  },[])
  return (
    <>
      <HeroSection />     
      <TechnoLogies />
      <CounterNum />
    </>
  )
}

export default Home
