import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#111940"
      showAlert('Dark mode has been Enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert('Light mode has been Enabled','success')
    }
  }

  return (
      <>
        <NavBar title="TextUtils" Mode={mode}toggleMode={toggleMode}/>
        <div className="container">
          <Alert alert={alert}/>
          <TextForm heading="Enter the text to anylise" Mode={mode} showAlert={showAlert}/>
        {/* <AboutUs/> */}
        </div>

      </>
  );
}

export default App;
