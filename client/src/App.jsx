import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Signin from './components/Signin';
import Dash from './Dash';
import { ToastContainer } from 'react-toastify';
import Addinfo from './components/Addinfo';
import Driver from './Driver';
import Tamil from './Tamil';


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/tamil' element={<Tamil/>}/>
        <Route path='/dash' element={<Dash/>}/>
        <Route path='/addinfo' element={<Addinfo/>}/>
        <Route path='/driver' element={<Driver/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App