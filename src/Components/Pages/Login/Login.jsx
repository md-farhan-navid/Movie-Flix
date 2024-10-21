import './login.css'
import logo from '../../../assets/logo.png'
import { useState } from 'react'

const Login = () => {
  
  const [signState, setSignState] = useState("Sign In")

    
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="Image Not Found" />
      <div className="login-form">
        <h2>{signState}</h2>
        <form>
          {signState === "Sign Up"?<input type="text" placeholder='Your name' />:<></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch"> 
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
