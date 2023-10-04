//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether the dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4a525b";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Test App - Home Dark";

      // setInterval(() => {
      //   document.title = 'Test App is amazing!'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install Test App now.'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Test App - Home Light";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="Test App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
        {/* <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
