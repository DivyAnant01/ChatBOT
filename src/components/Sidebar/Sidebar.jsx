import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"

function Sidebar() {
  const [extent,setExtent]=useState(false);
  return (
    <div className='sidebar'>
        <GiHamburgerMenu id='ham' onClick={()=>{
          setExtent(prev=>!prev)
        }}/>
        <div className="newchat">
            <FaPlus />
            {extent?<p>New Chat</p>:null}
            
        </div>
        <div className="recent">
            <FaRegMessage />
            {extent? <p>who are you</p>:null}
           
        </div>
    </div>
  )
}

export default Sidebar