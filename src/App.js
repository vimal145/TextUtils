import "./App.css";
import Alert from "./Components/Alert";
import { Navbar } from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const removeClassList=()=>{
    document.body.classList.remove('primary');
    document.body.classList.remove('secondary');
    document.body.classList.remove('success');
    document.body.classList.remove('danger');
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
  }

  const toggleMode = (cls) => {
    removeClassList();
    document.body.classList.add("bg-"+cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode is enabled", "success");
      // document.title = "TextUtils -- Dark Mode";
    } else if(mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      // document.title = "TextUtils -- light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
        <div className="container my-4">

        <Switch>
          <Route exact path="/about">
            <About mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/">
      <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
          </Route>
        </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
