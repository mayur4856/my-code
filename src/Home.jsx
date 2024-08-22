import React from 'react'
import HeroSection from "./components/hero/Hero"; 
import TechnoLogies from "./components/technologies/TechnoLogies";
import CounterNum from './components/counter/CounterNum';


const Home = () => {
  return (
    <>
      <HeroSection />     
      <TechnoLogies />
      <CounterNum />
    </>
  )
}

export default Home
