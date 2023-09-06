import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './HomePage.css'
import banner from '../utility/banner_1.png'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  return (
    <>
      <div className="banner">
        <div className="bound">
          <Grid className="main-banner" container spacing={2}>
            <Grid className='banner-left' item xs={6} md={6}>
              <Item>
                <div className='new-sec'>
                  <h2>Whats New </h2>
                  <ul className='latest-new'>
                    <li><ArrowForwardIosIcon /> <Link className='send' target="_blank" to="/uploads/order/c54184ce50b7d69668ec3879167b7b25.pdf"><b>05 Sep, 2023</b>&nbsp;&nbsp;In the matter of Mr. Vishal Pawankumar Bidawatjika, IP</Link></li>
                    <li><ArrowForwardIosIcon /> <Link className='send' target="_blank" to="/uploads/order/c54184ce50b7d69668ec3879167b7b25.pdf"><b>05 Sep, 2023</b>&nbsp;&nbsp;In the matter of Mr. Vishal Pawankumar Bidawatjika, IP</Link></li>
                    <li><ArrowForwardIosIcon /> <Link className='send' target="_blank" to="/uploads/order/c54184ce50b7d69668ec3879167b7b25.pdf"><b>05 Sep, 2023</b>&nbsp;&nbsp;In the matter of Mr. Vishal Pawankumar Bidawatjika, IP</Link></li>
                    <li><ArrowForwardIosIcon /> <Link className='send' target="_blank" to="/uploads/order/c54184ce50b7d69668ec3879167b7b25.pdf"><b>05 Sep, 2023</b>&nbsp;&nbsp;In the matter of Mr. Vishal Pawankumar Bidawatjika, IP</Link></li>
                  </ul>
                  <div className='subscribe-btn'>
                    <Link to="#">Subscribe</Link>
                  </div>
                </div>
              </Item>
            </Grid>

            <Grid className='banner-right' item xs={6} md={6}>
              <Item>
                <img src={banner} alt="banner" />
              </Item>
            </Grid>

          </Grid>

        </div>
      </div>
      <div className="quick-link">
        <div className="bound">
          <Grid className="title-sec" container spacing={2}>
            <Grid item xs={6} md={6}>
              <Item className='shadow-remove'>
                <h3 className='comman-title'>QUICK LINKS</h3>
              </Item>
            </Grid>

            <Grid className='btn-sec' item xs={6} md={6}>
              <Item className='shadow-remove'>
                <div className="btn-area">
                  <Link className='quick-link-btn blue-btn' target="_blank" to="#">Grievances / Complaints Login </Link>
                  <Link className='quick-link-btn blue-btn' target="_blank" to="#"> IP/RV Login   </Link>
                </div>
              </Item>
            </Grid>
          </Grid>
          <Grid className="link-sec" container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item className='shadow-remove section-box'>
                <div className="boxse">
                  <ul>
                    <li><div className="box-outer">
                      <Link to="/en/tender"><div className="box-inr"><div className="icon-color-b"><img src="/img/tender-1.png" alt="" /></div><span>
                      Tender
                    </span></div></Link></div></li>
                    <li><div className="box-outer"><Link to="/en/stakeholders"><div className="box-inr"><div className="icon-color-b"><img src="/img/stakeholders-1.png" alt="" /></div> <span>Other <br />Stakeholders</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/faqs"><div className="box-inr"><div className="icon-color-b"><img src="/img/faqs-1.png" alt="" /></div><span>FAQs</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/home/activities"><div className="box-inr"><div className="icon-color-b"><img src="/img/activities-1.png" alt="" /></div><span>Engagement with<br /> Academia</span></div></Link></div></li>

                    <li><div className="box-outer"><Link target="_blank" to="/en/home/career"><div className="box-inr"><div className="icon-color-b"><img src="/img/career-1.png" alt="" /></div><span>Career</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/home/rti"><div className="box-inr"><div className="icon-color-b"><img src="/img/RTI-1.png" alt="" /></div><span>Right to Information</span></div></Link></div></li>
                    <li><div className="box-outer"><Link to="/en/home/downloads"><div className="box-inr"><div className="icon-color-b"><img src="/img/downloadform-123.png" alt="" /></div><span>Downloads</span></div></Link></div></li>


                    <li><div className="box-outer"><Link to="/en/workshop"><div className="box-inr"><div className="icon-color-b"><img src="/img/workshop-1.png" alt="" /></div><span>IP Workshop</span></div></Link></div></li>
                  </ul>
                </div>


              </Item>
            </Grid>

            <Grid className='btn-sec' item xs={6} md={4}>
              <Item className='shadow-remove'>
              <div className="button_st">
                <Link className='blue-btn' to="#" target="_blank"><span>Intimation of Application</span></Link>
                <Link className='blue-btn' to="#" target="_blank"><span>Corporate Processes</span></Link>
                <Link className='blue-btn' to="#" target="_blank"><span>IP Corner</span></Link>
                <Link className='blue-btn' to="#" target="_blank"><span>Employee Corner</span></Link>
                  </div>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default HomePage