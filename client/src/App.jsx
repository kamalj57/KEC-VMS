import { Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Dash from './components/Dashboard/Dash';
import { ToastContainer } from 'react-toastify';
import Addinfo from './components/Addinfo/Addinfo';
import Driver from './components/Driver/Driver';
import Tamil from './components/Tamil/Tamil';


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/tamil' element={<Tamil/>}/>
        <Route path='/dashboard' element={<Dash/>}/>
        <Route path='/addinfo' element={<Addinfo/>}/>
        <Route path='/driver' element={<Driver/>}/>
      </Routes>
    </div>
  )
}

export default App