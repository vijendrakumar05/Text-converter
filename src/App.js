// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm1";
import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether darkMode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type1: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  // };

  const toggleMode = () => {
    // const toggleMode = (cls) => {
    // removeBodyClasses ();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enable", "success");
      // document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //    document.title = 'TextUtils is Amazing Mode';
      //    }, 2000);
      //    setInterval(() => {
      //    document.title = 'Install TextUtils Now';
      //    }, 1700);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/>  */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils- Word counter ,Character counter,Remove Extra Spaces"
                mode={mode} />
            </Route>
          </Switch>
          {/* <TextForm  showAlert={showAlert} heading="Enetr The Text to Analyze below" mode={mode} /> */}
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;

// video 15 till.
// // import logo from './logo.svg';
// import './App.css';
// import Alert from './components/Alert';
// // import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm1';
// import React, {useState} from 'react';

// function App() {
//    const [mode, setMode] = useState('light');//whether darkMode enable or not
//    const [alert, setAlert] = useState(null);
//    const showAlert = (message, type) => {
//      setAlert({
//       msg: message,
//       type1: type
//       })
//       setTimeout(() => {
//          setAlert(null)
//       },1500);
//    }

//    const toggleMode = () => {
//       if(mode === 'light'){
//          setMode('dark');
//          document.body.style.backgroundColor ="#042743";
//          showAlert("Dark Mode has been Enable","success");
//          document.title = 'TextUtils - Dark Mode';

//          // setInterval(() => {
//          //    document.title = 'TextUtils is Amazing Mode';
//          //    }, 2000);
//          //    setInterval(() => {
//          //    document.title = 'Install TextUtils Now';
//          //    }, 1700);

//       }else{
//          setMode('light');
//          document.body.style.backgroundColor ="white";
//          showAlert("Light Mode has been Enable","success");
//          document.title = 'TextUtils - Light Mode';
//       }
//    }
//   return (
//    <>
// <Navbar title = "textutils" mode={mode} toggleMode={toggleMode} />
// {/* <Navbar/>  */}
// <Alert alert={alert}/>
// <div className="container my -3">
//    <TextForm  showAlert={showAlert} heading="Enetr The Text to Analyze below" mode={mode} />
//    {/* <About/> */}
// </div>
//    </>
//   );
// }

// export default App;
