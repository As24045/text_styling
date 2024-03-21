// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './component/About';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Textform from './component/Textform';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type)=>
  {
      setAlert({
          msg:massage,
          type:type
      })

      setTimeout(()=>(
          setAlert(null)
      ), 2000)
  }

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>
  {
      if(mode === 'light')
      {
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has been enable","success");
          // setInterval (()=>{
          //     document.title="react is amazing";
          // },2000);

          // setInterval (()=>{
          //     document.title=" Try react app";
          // },1500);
      }
      else
      {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enable","success");
      }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="React" about="About-Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
            {/* <Navbar/> */}
            {/* <Navbar title="React"/> */}
            <div className="container my-3">
            <Routes>
             <Route exact path="/" element={<Textform showAlert={showAlert} heading="It is count of word" mode={mode} />}/>
              <Route  path='/about'  element={<About  mode={mode}/>} />
            </Routes>
            </div>
    </BrowserRouter>
    </>
  );
}


export default App;
