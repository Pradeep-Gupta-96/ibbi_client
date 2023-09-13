import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from './img/logo.png'

const Navbar = () => {
  return (

    <>
      <div className="header">
        <div className="bound">
          <div className="topsec">
            <div className="logo"><img src={logo} alt="Logo" /></div>
            <div className="menu">
              <Link to="javascript-void()" className='toggle-menu' style={{display:"none"}}>Menu</Link>
              <ul>
                <li className="nav-item parent"><Link className="nav-Link" to="/">Home</Link>
                  <ul>
                    <li><Link to="/about" >About Us</Link></li>
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
                <li className="nav-item parent"><Link className="nav-Link" to="/announcement">Announcements</Link>
                  <ul>
                    <li><Link to="#">Public Announcement</Link></li>
                    <li><Link to="#">Claims</Link></li>
                    <li><Link to="#">Invitation of Resolution Plan</Link></li>
                    <li><Link to="#">Auction Notices</Link></li>
                    <li><Link to="#">Orders</Link></li>
                    <li><Link to="#">Summary of Outcome</Link></li>
                  </ul>
                </li>
                <li className="nav-item"><Link className="nav-Link" to="#">Blog</Link></li>
                <li className="nav-item"><Link className="nav-Link" to="/contact-us">Contacts</Link></li>
                <li className="nav-item get-free"><Link className="nav-Link" to="#">Get Free Consultation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Navbar