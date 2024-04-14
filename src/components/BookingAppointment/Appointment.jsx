import React from 'react'
import './appointment.css'

const Appointment = () => {
  return (
    <div className='appointment'>

        <div className="dashboard-nav">
          <p>Medicare Health Clinic</p>
        </div>
        

        <div className="appointment-form">
          
          <form action="">
            <h2>Book an Appointment</h2>
            <div className="form-control">
              <label htmlFor="full name">Enter Full Name</label>
              <input type="text" placeholder='Full name' id='full name' required/>
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone</label>
              <input type="text" placeholder='Enter Phone number' id='phone' required/>
            </div>
            <div className="form-control">
              <label htmlFor="date">Appointment Date</label>
              <input type="date" name="date" id="date" />
            </div>
            <div className="form-control">
              <label htmlFor="date">Time</label>
              <input type="time" name="" id="" />
            </div>
            <div className="form-control">
              <label htmlFor="password">Enter Message</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message ...'></textarea>
            </div>
            <div className="form-control">
              <button type='submit' className='btn-appointment'>Book Appointment</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Appointment