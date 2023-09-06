import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import banner from './img/banner_1.png'
const Navbar = () => {
  return (

    <>
      <div className="header">
        <div className="bound">
          <div className="topsec">
            <div className="logo">IBC Support</div>
            <div className="menu">
              <Link to="javascript-void()" className='toggle-menu' style={{display:"none"}}>Menu</Link>
              <ul>
                <li className="nav-item parent"><Link className="nav-Link" to="#">Home</Link>
                  <ul>
                    <li><Link to="#">About Us</Link></li>
                  </ul>
                </li>
                <li className="nav-item parent"><Link className="nav-Link" to="#">Services</Link>
                  <ul>
                    <li><Link to="#">For Financial Creditor</Link></li>
                    <li><Link to="#">For Operational Creditor</Link></li>
                    <li><Link to="#">For Resolution Applicant</Link></li>
                  </ul>
                </li>
                <li className="nav-item"><Link className="nav-Link" to="#">Orders</Link></li>
                <li className="nav-item"><Link className="nav-Link" to="#">Public Announcements</Link></li>
                <li className="nav-item"><Link className="nav-Link" to="#">Blog</Link></li>
                <li className="nav-item"><Link className="nav-Link" to="#">Contacts</Link></li>
                <li className="nav-item get-free"><Link className="nav-Link" to="#">Get Free Consultation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="bound">
          <div className="main-banner"><img src={banner} alt="banner" /></div>
        </div>
      </div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="#">Action</Link>
          <Link className="dropdown-item" to="#">Another action</Link>
          <Link className="dropdown-item" to="#">Something else here</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar