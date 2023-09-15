import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import "./animate.css"
import { Link } from 'react-router-dom'
import logo from './img/logo.png'
 
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleScroll = () => {
    var scroll = window.scrollY;

    // Check if the user has scrolled beyond a certain point (e.g., 300 pixels)
    if (scroll >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  
  return (

    <>
      <div className="topbar"><marquee>IBC Support: Navigating Corporate Insolvency with Expertise and Excellence</marquee></div>
      <div className={`header ${isScrolled ? 'fix-header' : ''}`}>
        <div className="bound">
          <div className="topsec">
            <div className="logo"><Link className="nav-Link" to="/"><img src={logo} alt="Logo" /></Link></div>
            <div className="menu">
              <Link to="/" className='toggle-menu' style={{display:"none"}}>Menu</Link>
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
                    <li><Link to="/supremecourt">SUPREME COURT</Link></li>
                    <li><Link to="/highcourts">HIGH COURTs</Link></li>
                    <li><Link to="/nclat">NCLAT</Link></li>
                    <li><Link to="/nclt">NCLT</Link></li>
                    <li><Link to="/drts">DRTs</Link></li>
                    <li><Link to="/ibbi">IBBI</Link></li>
                    <li><Link to="/iparvo">IPA/RVO</Link></li>
                    <li><Link to="/othercourts">OTHER COURTS</Link></li>
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
                    <li><Link to="/viewdeatils">Whats New</Link></li>
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