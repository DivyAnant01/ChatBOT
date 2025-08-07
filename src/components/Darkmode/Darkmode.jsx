import React, { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import "./Darkmode.css"
import { LuMoon } from "react-icons/lu";


function Darkmode() {
    const [mode,setMode]=useState();
    function toggle(){
        if (mode==="darkmode") {
            setMode("lightmode");
        }else{
            setMode("darkmode");
        }
    }
    useEffect(()=>{
        document.body.className=mode,[mode]
    })
  return (
    <div>
        <button className='darkmodebtn' onClick={()=>{
            toggle()
            console.log(mode)
        }}>{mode==="darkmode"?<MdOutlineWbSunny />:<LuMoon />} </button>
    </div>
  )
}

export default Darkmode 
