import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import signup from '../../images/new_signup-removebg-preview.png'


const Signup = () => {
  return (
    <div className="signup">

      <div className="card">

        <div className="signup-image">
          <img src={signup} alt="" />
        </div>

        <div className="signup-form">
          <h2>Sign up</h2>
          <form action="">
            <div className="form-control">
              <label htmlFor="email">Full Name</label>
              <input type="text" placeholder='Enter Full Name' id='' required/>
            </div>
            <div className="form-control">
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Enter Email' id='' required/>
            </div>
            <div className="form-control">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter Password' id='' required/>
            </div>
            <div className="form-control">
              <label htmlFor="">Confirm Password</label>
              <input type="password" placeholder='Confirm Password' id='' required/>
            </div>
            <div className="form-control">
              <button type='submit'>Sign Up</button>
            </div>
            <div className="form-control">
              <span>Already have an account? <Link to='/login'>Login</Link>
              </span>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Signup