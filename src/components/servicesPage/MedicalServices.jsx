import React from 'react'
import './medicalservices.css'

import { useNavigate } from 'react-router-dom';

const MedicalServices = () => {



  const navigate = useNavigate();

  const goToAppointment = () => {
    console.log('testing')
    navigate('/appointment')
  }
  const goToPharmacy = () => {
    console.log('testing')
    navigate('/pharmacy')
  }

  return (
    <div className='dashboard'>
        <div className="dashboard-nav">
          <p>Medicare Health Clinic</p>
        </div>
        <div className="container">
          <p className='head-text'><span class="material-symbols-outlined">list</span> Services</p>
          <div className="boxes">
            <div className="box" onClick={goToPharmacy}>
              <span className="material-symbols-outlined">local_pharmacy</span>
              <div className="box-text">
                <p className="thick">Online Pharmacy</p>
                <p className='small'>Your online pharmacy for quality care, delivered.</p>
              </div>
              
            </div>
            <div className="box" onClick={goToAppointment}>
              <span className="material-symbols-outlined">book_online</span>
              <div className="box-text">
                <p className="thick">Schedule Appointment</p>
                <p className='small'>Easily book appointments online with us. Your health, your schedule, our priority.</p>
              </div>
            </div>
            <div className="box">
              <span className="material-symbols-outlined">receipt_long</span>
              <div className="box-text">
                <p className="thick">Pay Bills</p>
                <p className='small'>Pay your bills hassle-free with our secure online portal. Convenient, efficient, and worry-free transactions</p>
              </div>
            </div>
            <div className="box">
              <span className="material-symbols-outlined">ambulance</span>
              <div className="box-text">
                <p className="thick">Emergency</p>
                <p className='small'>Urgent care when you need it most. Trust us for prompt and compassionate emergency services</p>
              </div>
            </div>


          </div>
          <p className='description'>Explore a wide range of personalized services designed to promote wellness and enhance your quality of life</p>
          
        </div>

        
        
    </div>
  )
}

export default MedicalServices