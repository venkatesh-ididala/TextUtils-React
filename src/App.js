//import logo from "./logo.svg";
import "./Appa.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { useState } from "react";
import Alert from "./components/Alert";

let name = "kohli";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("DarkMode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing ";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils now  "; //---->tite is   changes
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        AboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to Analyze below"
        mode={mode}
      />
    </>
  );
}

export default App;
