import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import AboutUs from "./components/AboutUs";
// import Alert from "./Alert";
import { useState } from "react";

function App() {
  const [mode,setMode]=useState('light')
  // const [Alert,setAlert]=useState(null)

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#111940"
      // showAlert('Dark mode has been Enabled','Success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      // showAlert('Light mode has been Enabled','Success')
    }
  }

  return (
      <>
        <NavBar title="TextUtils" Mode={mode}toggleMode={toggleMode}/>
        <div className="container">
          {/* <Alert/> */}
          <TextForm heading="Enter the text to anylise" Mode={mode}/>
        {/* <AboutUs/> */}
        </div>

      </>
  );
}

export default App;
