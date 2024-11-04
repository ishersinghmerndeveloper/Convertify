import { Fragment,useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import PropTypes from 'prop-types'
// import About from './component/About';
import Textform from './component/Textform';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  // ENABLE DARK OR LIGHT MODE FUNCTION
  const [mode,setMode]=useState('light'); // It indicates the dark mode is enabled or not
 

  const toggleMode = () => {
    if (mode === 'light')
    {
      setMode ('dark');
      document.body.style.backgroundColor = '#abaaaa';
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  // SHOW ALERT MESSAGE FUNCTION 
  const [alert,setAlert]=useState("");

  const showAlert = (message,type) => {
    setAlert ({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);  
    },2000);    
  }

  return (
    <Fragment>
    {/* <Router> */}
        <Navbar title="Convertify" aboutConvertify="AboutUs" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
        {/* <Route exact path="/about">
          <About/>
        </Route>   */}
        {/* <Route exact  path="/"> */}
            <Textform heading ="Enter the text to analyze" showAlert={showAlert}/>
        {/* </Route> */}
    {/* </Switch>   */}
      </div>
    {/* </Router>  */}
    </Fragment>  
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string,
  aboutConvertify:PropTypes.string
}
