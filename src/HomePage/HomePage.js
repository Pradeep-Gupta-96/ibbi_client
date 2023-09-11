import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './HomePage.css'
import banner from '../utility/banner_1.png'
import activities from '../utility/activities-1.png'
import career from '../utility/career-1.png'
import downloadform from '../utility/downloadform-123.png'
import faqs from '../utility/faqs-1.png'
import RTI from '../utility/RTI-1.png'
import stakeholders from '../utility/stakeholders-1.png'
import TENDER from '../utility/tender-1.png'
import workshop from '../utility/workshop-1.png'
import aboutimg from '../utility/about-img.jpeg'
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
                  <Link className='quick-link-btn green-btn' target="_blank" to="#">Grievances / Complaints Login </Link>
                  <Link className='quick-link-btn green-btn' target="_blank" to="#"> IP/RV Login   </Link>
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
                      <Link to="/en/tender"><div className="box-inr"><div className="icon-color-b"><img src={workshop} alt="banner" /></div><span>
                        Tender
                      </span></div></Link></div></li>
                    <li><div className="box-outer"><Link to="/en/stakeholders"><div className="box-inr"><div className="icon-color-b"> <img src={activities} alt="banner" /></div> <span>Other <br />Stakeholders</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/faqs"><div className="box-inr"><div className="icon-color-b"><img src={career} alt="banner" /></div><span>FAQs</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/home/activities"><div className="box-inr"><div className="icon-color-b"><img src={downloadform} alt="banner" /></div><span>Engagement with<br /> Academia</span></div></Link></div></li>

                    <li><div className="box-outer"><Link target="_blank" to="/en/home/career"><div className="box-inr"><div className="icon-color-b"><img src={faqs} alt="banner" /></div><span>Career</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/home/rti"><div className="box-inr"><div className="icon-color-b"><img src={RTI} alt="banner" /></div><span>Right to Information</span></div></Link></div></li>
                    <li><div className="box-outer"><Link to="/en/home/downloads"><div className="box-inr"><div className="icon-color-b"><img src={stakeholders} alt="banner" /></div><span>Downloads</span></div></Link></div></li>


                    <li><div className="box-outer"><Link to="/en/workshop"><div className="box-inr"><div className="icon-color-b"><img src={TENDER} alt="banner" /></div><span>IP Workshop</span></div></Link></div></li>
                  </ul>
                </div>


              </Item>
            </Grid>

            <Grid className='btn-sec' item xs={6} md={4}>
              <Item className='shadow-remove'>
                <div className="button_st">
                  <Link className='green-btn' to="#" target="_blank"><span>Intimation of Application</span></Link>
                  <Link className='green-btn' to="#" target="_blank"><span>Corporate Processes</span></Link>
                  <Link className='green-btn' to="#" target="_blank"><span>IP Corner</span></Link>
                  <Link className='green-btn' to="#" target="_blank"><span>Employee Corner</span></Link>
                </div>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='about-sec'>
        <div className="bound">
          <Grid className="about" container spacing={2}>
              <Grid item xs={6} md={6}>
                <Item className='shadow-remove about-img'>
                  <div className='ab-img'><img src={aboutimg} alt="banner" /></div>
                </Item>
              </Grid>
              <Grid className='about-text' item xs={6} md={6}>
                <Item className='shadow-remove'>
                    <div className='text-box'>
                      <h3>Welcome to IBC Support</h3>
                      <p className='ab-text'>IBC Support Forum, established in 2016, stands as a stalwart in the Indian financial landscape, offering a comprehensive suite of legal services to financial creditors, operational creditors, and resolution applicants. With an unwavering commitment to facilitating smooth insolvency and bankruptcy proceedings, IBC Support Forum has earned its reputation as a trusted partner in the Indian Corporate / Banking sector.</p>
                      <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                    </div>
                </Item>
              </Grid>
            </Grid>
        </div>
      </div>
      <div className='services-sec padding-50'>
        <div className="bound">
          <h3 className="comman-title mb-30">Services</h3>
          <Grid className="services-items" container spacing={2}>
              <Grid item xs={4} md={4}>
                <Item className='service-item'>
                  <h3>For Financial Creditor</h3>
                  <p className='ab-text'>Empower Financial Creditors to protect the interests and maximize recovery in the complex landscape of the Insolvency and Bankruptcy Code (IBC).</p>
                  <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                </Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item className='service-item'>
                  <h3>For Operational Creditor</h3>
                  <p className='ab-text'>Empower Operational Creditors to safeguard your interests and optimize your recovery within the complexities of the Insolvency and Bankruptcy Code (IBC).</p>
                  <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                </Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item className='service-item'>
                  <h3>For Resolution Applicant</h3>
                  <p className='ab-text'>Empower Resolution Applicants to navigate the complexities of the Insolvency and Bankruptcy Code (IBC). </p>
                  <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                </Item>
              </Grid>
            </Grid>
        </div>
      </div>
      <div className='highlights-sec blue-bg padding-50'>
        <div className="bound">
          <div className="title-sec mb-30">
            <h3 className="comman-title">Highlights</h3>
            <div className="np-aero"><Link to="#"><KeyboardArrowLeftIcon/></Link><Link to="#"><KeyboardArrowRightIcon/></Link></div>
          </div>
          <Grid className="services-items" container spacing={2}>
              <Grid item xs={4} md={4}>
                <Item className='service-item shadow-remove'>
                  <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                  <div className="content-box">
                    <h3>Highlights 1</h3>
                    <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item className='service-item shadow-remove'>
                  <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                  <div className="content-box">
                    <h3>Highlights 2</h3>
                    <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item className='service-item shadow-remove'>
                  <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                  <div className="content-box">
                    <h3>Highlights 3</h3>
                    <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                  </div>
                </Item>
              </Grid>
            </Grid>
        </div>
      </div>
      <div className='testmonial-sec padding-50'>
        <div className="bound">
          <h3 className="comman-title mb-30">Testimonials</h3>
          <Grid className="tm-items" container spacing={2}>
              <Grid item xs={12} md={12}>
                <Item className='tme-item'>
                  
                  <div className="content-box">
                    <div className="quate-icon"><FormatQuoteIcon  fontSize='large' /></div>
                    <p className='tm-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    <div className="authar-name"><strong>Cient Name</strong><br />Designation</div>
                  </div>
                </Item>
              </Grid>
            </Grid>
        </div>
      </div>
      <div className='blog-sec highlights-sec blue-bg padding-50'>
        <div className="bound">
          <div className="title-sec mb-30">
            <h3 className="comman-title">Blog Post</h3>
            <div className="np-aero"><Link to="#"><KeyboardArrowLeftIcon/></Link><Link to="#"><KeyboardArrowRightIcon/></Link></div>
          </div>
          <Grid className="services-items" container spacing={2}>
              <Grid item xs={4} md={4}>
                <Item className='service-item shadow-remove'>
                  <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                  <div className="content-box">
                    <h3>Post 1</h3>
                    <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item className='service-item shadow-remove'>
                  <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                  <div className="content-box">
                    <h3>Post 2</h3>
                    <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={4} md={4}>
                <Item className='service-item shadow-remove'>
                  <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                  <div className="content-box">
                    <h3>Post 3</h3>
                    <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                    <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
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