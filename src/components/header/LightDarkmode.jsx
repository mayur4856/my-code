import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

const LightDarkmode = () => {

    const [state, setState] = useState("dark-mode");

    const change = () =>{
      if (state === "dark-mode") {
        setState("light-mode")
      }else{
        setState("dark-mode")
      }
    }
    
    useEffect(()=>{
      document.querySelector("body").className=state
    },[state])

  return (

    <div className="theme-mode" onClick={change}>
        {state === "dark-mode" ? <FaMoon className="moon" /> : <FaSun className="sun" />}
    </div>

  )
}

export default LightDarkmode
