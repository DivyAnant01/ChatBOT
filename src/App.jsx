import { useContext } from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import ChatSection from "./components/chatSection/ChatSection"
import Seperation from "./components/seperation/Seperation"
import { dataContext } from "./context/UserContext"

function App() {
  return (
    <>
    <Sidebar/>
    <Seperation/>
    <ChatSection/>
    </>
  )
}

export default App
