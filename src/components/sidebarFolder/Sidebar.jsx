import React from 'react'
import './sidebar.css'
import user from '../../images/user-icon.png'
import { Link } from 'react-router-dom'

const Sidebar = ({current}) => {
  return (
    <div className='sidebar'>
        <div className="side-logo">
            <div className="img-logo">
                <img src={user} alt="" />
            </div>
            <p>STEVEN JONES</p>
            {/* <span>stevejones035@gmail.com</span> */}
        </div>
        <div className="menu">
            <ul>
                <li className={current === 'Dashboard' ? 'active-link' : ''}><span className="material-symbols-outlined">Dashboard</span><Link to='/dashboard'>Dashboard</Link></li>
                <li className={current === 'Profile' ? 'active-link' : ''}> <i className='bx bx-user-circle'></i><Link to=''>Profile</Link></li>
                <li className={current === 'Services' ? 'active-link' : ''}><i className='bx bx-list-ul'></i><Link to='/services'>Services</Link></li>
                <li className={current === 'Payment' ? 'active-link' : ''}><span className="material-symbols-outlined">payments</span><Link to=''>Payments</Link></li>
            </ul>
        </div>
        <div className="menu bottom">
            <ul>
                <li><i className='bx bx-log-out-circle'></i>Logout</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar