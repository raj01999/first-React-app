import Navbar from "./component/Navbar";
import TextArea from "./component/TextArea";
import { useState } from "react";
function App() {
  const dark = {
    backgroundColor : "#686868",
    color : "white",
  }
  const light = {
    backgroundColor : "white",
    color : "black"
  }

  const [myStyle, setStyle] = useState(light)
  const [darkMode, setDarkMode] = useState("On Dark Mode")
  const darkMoreFun = ()=>{
    if (myStyle.backgroundColor === "white"){
      setStyle(dark)
      setDarkMode("On Light Mode")
    }
    else{
      setStyle(light)
      setDarkMode("On Dark Mode")
    }
  }
  const [modeStatus, setModeStatus] = useState("Dark Mode")
  const [mode, setMOde] = useState(true)
  const changeMode = ()=>{
    if (mode){
      document.body.style.backgroundColor = "#696969";
      setMOde(false)
      setModeStatus("Light Mode")
      setStyle(dark)
    }
    else{
      document.body.style.backgroundColor = "white";
      setMOde(true)
      setModeStatus("Dark Mode")
      setStyle(light)
    }
  }
  return (
    <>
      <Navbar title="Word Changer" mode ={mode} modeFun = {changeMode} modeStatus = {modeStatus}/>
      <div className="container my-1">
        <TextArea hedding = "Enter the text here" darkMoreFun = {darkMoreFun} myStyle={myStyle} darkMode ={darkMode} />
      </div>
    </>
  );
}

export default App;
