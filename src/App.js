//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  // }
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4a525b";
      showAlert("Dark mode has been enabled", "success");

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Test App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading=" Try Test App - Word counter, Charachter counter, Remove extra spaces."
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About  mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
