import Navbar from "./component/Navbar";
import TextArea from "./component/TextArea";
import { useState } from "react";
import Aleart from "./component/Aleart";
import About from "./component/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const dark = {
    backgroundColor: "#686868",
    color: "white",
  };
  const light = {
    backgroundColor: "white",
    color: "black",
  };

  const [myStyle, setStyle] = useState(light);
  const [darkMode, setDarkMode] = useState("Dark Mode");
  const darkMoreFun = () => {
    if (myStyle.backgroundColor === "white") {
      setStyle(dark);
      setDarkMode("Light Mode");
      showAleart("Dark Mode", "success")
      setTimeout(()=>{
        setAleart(null)
      }, 1500)
    } else {
      setStyle(light);
      setDarkMode("Dark Mode");
      showAleart("Light Mode", "success")
      setTimeout(()=>{
        setAleart(null)
      }, 1500)
    }
  };

  const [aleart, setAleart] = useState(null);
  const showAleart = (msg, status) => {
    setAleart({
      msg: msg,
      status: status,
    });
  };

  const [modeStatus, setModeStatus] = useState("Dark Mode");
  const [mode, setMOde] = useState(true);
  const changeMode = () => {
    if (mode) {
      document.body.style.backgroundColor = "#696969";
      setMOde(false);
      setModeStatus("Light Mode");
      setStyle(dark);
      setDarkMode("Light Mode")
      showAleart("Dark Mode", "success")
      setTimeout(()=>{
        setAleart(null)
      }, 1500)
    } else {
      document.body.style.backgroundColor = "white";
      setMOde(true);
      setModeStatus("Dark Mode");
      setStyle(light);
      setDarkMode("Dark Mode")
      showAleart("Light Mode", "success")
      setTimeout(()=>{
        setAleart(null)
      }, 1500)
    }
  };

  return (
    <>
    <BrowserRouter>
      <Navbar
        title="Word Changer"
        mode={mode}
        modeFun={changeMode}
        modeStatus={modeStatus}
      />
        <Aleart aleart= {aleart} />
        <Routes>
          <Route exact path="/about" component={<About/>} />
          <Route exact path="/text" component={
            <TextArea
            hedding="Enter the text here"
            darkMoreFun={darkMoreFun}
            myStyle={myStyle}
            darkMode={darkMode}
            showAleart ={showAleart}
            setAleart = {setAleart}
          />
          } />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
