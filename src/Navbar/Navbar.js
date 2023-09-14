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
                <li className="nav-item parent"><Link className="nav-Link" to="#">Orders</Link>
                <ul>
                    <li><Link to="/">SUPREME COURT</Link></li>
                    <li><Link to="/highcourts">HIGH COURTs</Link></li>
                    <li><Link to="/">NCLAT</Link></li>
                    <li><Link to="/">NCLT</Link></li>
                    <li><Link to="/drat">DRAT</Link></li>
                    <li><Link to="/drts">DRTs</Link></li>
                    <li><Link to="/">IBBI</Link></li>
                    <li><Link to="/">IPA/RVO</Link></li>
                    <li><Link to="/">OTHER COURTS</Link></li>
                    </ul>
                </li>
                <li className="nav-item parent"><Link className="nav-Link" to="#">Announcements</Link>
                  <ul>
                    <li><Link to="/announcement">Public Announcement</Link></li>
                    <li><Link to="/Claims">Claims</Link></li>
                    <li><Link to="/Invitation">Invitation of Resolution Plan</Link></li>
                    <li><Link to="/Auction">Auction Notices</Link></li>
                    <li><Link to="/Orders">Orders</Link></li>
                    <li><Link to="/Summary">Summary of Outcome</Link></li>
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