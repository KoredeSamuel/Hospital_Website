import React from 'react'
import './dashboard.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

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
          <p className='head-text'><span className="material-symbols-outlined">Dashboard</span> Dashboard</p>
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
          <div className="container2">
            <p className='head-text'><span class="material-symbols-outlined">list</span> Electronic Medical History</p>
            <div className="medical-list">
              <div className="row">
                <i className='bx bx-plus-medical'></i>
                <div>
                  <h3>Patient Visited</h3>
                  <p>Date: 16th April</p>
                </div>
                <i className='bx bx-right-arrow-alt right-arrow'></i>

                

              </div>
              <div className="row">
              <i className='bx bx-plus-medical'></i>
                <div>
                  <h3>Patient Visited</h3>
                  <p>Date: 3rd April</p>
                </div>
                <i className='bx bx-right-arrow-alt right-arrow'></i>
              </div>
              <div className="row">
                <i className='bx bx-plus-medical'></i>
                  <div>
                    <h3>Patient Admitted</h3>
                    <p>Date: 17th March</p>
                  </div>
                  <i className='bx bx-right-arrow-alt right-arrow'></i>
              </div>
            </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default Dashboard