import React, { useState } from 'react'
import { createContext } from 'react';
export const dataContext=createContext();
import run from '../gemini'

function UserContext({children}) {
    const [input,setInput]=useState("");
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("")
    const[recentPrompt,setRecentPrompt]=useState("")

   async function sent(input){
       setShowResult(true);
       setRecentPrompt(input);
       setLoading(true); 
       let response = await run(input);
       setResultData(response);
       setInput("") 
    }

    const data={
        input,
        setInput,
        sent,
        loading,
        setLoading,
        showResult,
        setShowResult,
        resultData, 
        setResultData,
        recentPrompt,
        setRecentPrompt
    }
    // console.log(children);
    
  return (
    <>
    <dataContext.Provider value={data}>
        {children};
    </dataContext.Provider>
    </>
  )
}

export default UserContext