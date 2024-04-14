import React from 'react'
import './login.css'
import login_img from '../../images/new_login-removebg-preview.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();


  const dashboard_redirect = () => {
    navigate('/dashboard')
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="login-form">
          <h2>Login</h2>
          <form action="">
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder='Enter Email' id='email' required/>
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="text" placeholder='Enter Password' id='passwowrd' required/>
            </div>
            <div className="form-control">
              <button type='submit' onClick={dashboard_redirect}>Login</button>
              <span>forgot password</span>
            </div>
            <div className="form-control">
              <span>Don't have an account? <Link to='/signup'>sign up</Link>
              </span>
            </div>
          </form>
        </div>
        <div className="login-image">
          <img src={login_img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login