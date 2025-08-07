import React, { useState, useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css"
import { dataContext } from '../../context/UserContext';

function Sidebar() {
  const [extent, setExtent] = useState(false);
  const { sent, prevPrompt,newChat} = useContext(dataContext); 
  async function loadPrevPrompt(prompt) {
    sent(prompt);
  }

  return (
    <div className='sidebar'>
      <GiHamburgerMenu id='ham' onClick={() => {
        setExtent(prev => !prev)
      }} />

      <div className="newchat" onClick={()=>{
        newChat();
      }}>
        <FaPlus />
        {extent ? <p>New Chat</p> : null}
      </div>

      {prevPrompt.map((item, index) => {
        return (
          <div className="recent" key={index} onClick={()=>{
            loadPrevPrompt(item)
          }}>
            <FaRegMessage />
            {extent ? <p>{item.slice(0,10)+"..."}</p> : null}
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar
