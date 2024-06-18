import './Signup.css'
import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Signup= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const baseUrl=import.meta.env.VITE_REACT_APP_API;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password.length<6){
      return toast.error("Password must be atleast 6 characters")
    }
    try {
      const response = await axios.post(`${baseUrl}/api/v1/sign-up`, { email , password });
      
      if(response.status === 200){ 
        toast.success('Logined successfully!');
        setTimeout(()=>{
          navigate('/dashboard');
        },500)
       
      }
      else
      {
        throw new Error('Login faild')
      }
    } catch (error) {
      toast.error('Failed to Login. Contact administration.');
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  return (
    <div className="outerform">
    <form className="form" onSubmit={handleSubmit}>
      <div className="header">
      <p className='title'>Sign Up</p>
      </div>
      <div className="flex-column">
        <label>Email</label>
      </div>
      <div className="inputForm">
        
        <input type='email' className="input" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="flex-column">
        <label>Password</label>
      </div>
      <div className="inputForm">
       
        <input type="password" className="input" placeholder="Password length should be 6 letters" value={password} onChange={(e) => setPassword(e.target.value)}/>
        
      </div>

      <div className="flex-row">
       </div>
      <button className="button-submit">Sign Up</button>
      <p>Already have an account ? : <Link to='/sign-in' style={{textDecoration:"none",fontWeight:"bold",fontSize:"700"}} >Sign in</Link></p>
    </form>
     
    </div>
  );
};

export default Signup;
