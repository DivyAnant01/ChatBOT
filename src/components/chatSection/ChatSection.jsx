import React, { useContext } from 'react'
import "./ChatSection.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizontal } from "react-icons/lu"
import { dataContext } from '../../context/UserContext'
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"


function ChatSection() {
  let {sent,input,setInput,showResult,resultData,recentPrompt,loading}=useContext(dataContext)
  return (
    
    <div className='chatsection'>
      <div className="topsection">
        {!showResult? <div className="headings">
          <span>Hello Guy's,</span>
          <span>I'm your own Assistant</span>
          <span>What can i help you...?</span>
        </div>:<div className='result'>
            <div className="userbox">
              <img src={user} alt="" width="50px"/>
              <p>{recentPrompt}</p>
            </div>
            <div className="aibox">
              <img src={ai} alt="" width="50px"/>
              {loading?
              <div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :
              <p>{resultData}</p>
              }
              
            </div>
          </div>}
       

      </div>

      <div className="bottomsection">
          <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter a prompt' value={input} />
          {input? <button id="sentbtn" onClick={()=>{
            sent(input)
          }}><LuSendHorizontal/> </button>:null}
         
          <Darkmode/>
          
      </div>
    </div>
  )
}

export default ChatSection