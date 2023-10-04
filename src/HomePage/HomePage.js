import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './HomePage.css'
import banner from '../utility/hero-img.png'
import cercle from '../utility/cercle-shape.png'
import whyus from '../utility/why-us.png'
import activities from '../utility/activities-1.png'
import career from '../utility/career-1.png'
import downloadform from '../utility/downloadform-123.png'
import faqs from '../utility/faqs-1.png'
import RTI from '../utility/RTI-1.png'
import stakeholders from '../utility/stakeholders-1.png'
import TENDER from '../utility/tender-1.png'
import workshop from '../utility/workshop-1.png'
import aboutimg from '../utility/about-img.jpeg'
import nophoto from '../utility/no-photo.jpg'
import { Link as Jetha } from '@mui/material'
import { Link } from "react-router-dom"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => {

  const [Result, setResults] = React.useState([]);
  const [todos, setTodos] = React.useState([]);
  const [highlights, sethighlights] = React.useState([]);
  const [testimonials, settestimonials] = React.useState([]);
  const [startIndex, setStartIndex] = React.useState(0);

  const API1 = `http://43.205.145.146:4000/api/public_announcement`

  const fetchData1 = React.useCallback(async () => {
    try {
      const response = await fetch(`${API1}`)

      const result = await response.json()

      setResults(result)
    } catch (error) {
      console.log(error)
    }
  }, [API1])

  React.useEffect(() => {
    fetchData1();
  }, [fetchData1]);


  React.useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://43.205.145.146:4000/blog/getAllTodo';

    // Create an async function to fetch todos
    async function fetchTodos() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTodos(data.todos.reverse()); // Assuming the response contains an array of todos
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }

    // Call the async function
    fetchTodos();
  }, []); // The empty dependency array means this effect runs once after the initial render


  const showNextThree = () => {
    if (startIndex + 3 < todos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPreviousThree = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleTodos = todos.slice(startIndex, startIndex + 3);

  React.useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://43.205.145.146:4000/highlights/getAllhighlights';

    // Create an async function to fetch highlights
    async function fetchhighlights() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        sethighlights(data.highlights.reverse()); // Assuming the response contains an array of highlights
      } catch (error) {
        console.error('Error fetching highlights:', error);
      }
    }

    // Call the async function
    fetchhighlights();
  }, []); // The empty dependency array means this effect runs once after the initial render



  const showNextThreehighlights = () => {
    if (startIndex + 3 < highlights.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPreviousThreehighlights = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visiblehighlights = highlights.slice(startIndex, startIndex + 3);

  React.useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://43.205.145.146:4000/testimonials/getAlltestimonials';

    // Create an async function to fetch testimonials
    async function fetchtestimonials() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        settestimonials(data.testimonials.reverse()); // Assuming the response contains an array of testimonials
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    }

    // Call the async function
    fetchtestimonials();
  }, []); // The empty dependency array means this effect runs once after the initial render



  const showNextThreetestimonials = () => {
    if (startIndex + 3 < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPreviousThreetestimonials = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibletestimonials = testimonials.slice(startIndex, startIndex + 3);

  const resolveImageUrl = (relativeUrl) => {
    const baseUrl = 'http://43.205.145.146:4000/'; // Replace with your server's base URL
    return `${baseUrl}${relativeUrl}`;
  };



  return (
    <>
      <div className="banner">
        <div className="bound">
          <Grid className="main-banner" container spacing={2}>
            <Grid className='banner-left' item xs={12} md={6}>
              <Item>
                <div className='new-sec'>
                  <h2>PUBLIC ANNOUNCEMENT</h2>
                  <Paper className='table-row' sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer>
                      <Table className='data-table' stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ width: '36%' }}>Type of Public Announcement</TableCell>
                            <TableCell >Date of Announcement</TableCell>
                            <TableCell >Name of Corporate Debtor</TableCell>
                            <TableCell >Name of Insolvency Professional</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Result
                            .map((item, index) => {
                              return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                  <TableCell sx={{ cursor: 'pointer' }}>
                                    <Jetha href={item.pdfLink} target="_blank" rel="noopener noreferrer">{item.typeOfPA}</Jetha>
                                  </TableCell>
                                  <TableCell >{item.dateOfAnnouncement}</TableCell>
                                  <TableCell >{item.corporateDebtor}</TableCell>
                                  <TableCell >{item.nameOfIP}</TableCell>
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Link className='more-cont' to="/announcement">Show More...</Link>
                  </Paper>
                </div>
              </Item>
            </Grid>

            <Grid className='banner-right' item xs={12} md={6}>
              <Item className='shadow-remove'>
                <img className='img-anim' src={banner} alt="banner" />
              </Item>
            </Grid>

          </Grid>

        </div>
      </div>
      <div className="quick-link">
        <div className="bound">
          <Grid className="title-sec" container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item className='shadow-remove'>
                <h3 className='comman-title'>QUICK LINKS</h3>
              </Item>
            </Grid>

            {/* <Grid className='btn-sec' item xs={12} md={6}>
              <Item className='shadow-remove'>
                <div className="btn-area">
                  <Link className='quick-link-btn green-btn' target="_blank" to="#">Grievances / Complaints Login </Link>
                  <Link className='quick-link-btn green-btn' target="_blank" to="#"> IP/RV Login   </Link>
                </div>
              </Item>
            </Grid> */}
          </Grid>
          <Grid className="link-sec" container spacing={2}>
            <Grid item xs={12} md={8}>
              <Item className='shadow-remove section-box'>
                <div className="boxse">
                  <ul>
                    <li><div className="box-outer"><Link to="/en/tender"><div className="box-inr"><div className="icon-color-b"><img src={workshop} alt="banner" /></div><span>Recent Updates & News</span></div></Link></div></li>
                    <li><div className="box-outer"><Link to="/en/stakeholders"><div className="box-inr"><div className="icon-color-b"> <img src={activities} alt="banner" /></div> <span>Resource Centre</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/faqs"><div className="box-inr"><div className="icon-color-b"><img src={career} alt="banner" /></div><span>Our Services</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/home/activities"><div className="box-inr"><div className="icon-color-b"><img src={downloadform} alt="banner" /></div><span>Download Forms</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/home/career"><div className="box-inr"><div className="icon-color-b"><img src={faqs} alt="banner" /></div><span>Frequently Asked Questions</span></div></Link></div></li>
                    <li><div className="box-outer"><Link target="_blank" to="/en/home/rti"><div className="box-inr"><div className="icon-color-b"><img src={RTI} alt="banner" /></div><span>Important Links</span></div></Link></div></li>
                    <li><div className="box-outer"><Link to="/en/home/downloads"><div className="box-inr"><div className="icon-color-b"><img src={stakeholders} alt="banner" /></div><span>IBC Forum</span></div></Link></div></li>
                    <li><div className="box-outer"><Link to="/en/workshop"><div className="box-inr"><div className="icon-color-b"><img src={TENDER} alt="banner" /></div><span>Landmark Cases</span></div></Link></div></li>
                  </ul>
                </div>


              </Item>
            </Grid>

            <Grid className='btn-sec' item xs={12} md={4}>
              <Item className='shadow-remove'>
                <div className="button_st">
                  <Link className='green-btn' to="#" target="_blank"><span>Assistance in Claim Submission</span></Link>
                  <Link className='green-btn' to="#" target="_blank"><span>Filing of progress reports</span></Link>
                  <Link className='green-btn' to="#" target="_blank"><span>Recovery of Dues</span></Link>
                  <Link className='green-btn' to="#" target="_blank"><span>Preparation of Resolution Plan</span></Link>
                </div>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='about-sec gray-bg'>
        <div className="bound">
          <Grid className="about" container spacing={2}>
            <Grid item xs={12} md={6}>
              <Item className='shadow-remove remove-bg about-img'>
                <div className='ab-img wow fadeInLeft'>
                  <img className='cercle-img' src={cercle} alt="banner" />
                  <img className='img-anim' src={whyus} alt="banner" /></div>
              </Item>
            </Grid>
            <Grid className='about-text wow fadeInRight' item xs={12} md={6}>
              <Item className='shadow-remove remove-bg'>
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
            <Grid item xs={12} md={4} sm={4}>
              <Item className='service-item'>
                <h3>For Financial Creditor</h3>
                <p className='ab-text'>Empower Financial Creditors to protect the interests and maximize recovery in the complex landscape of the Insolvency and Bankruptcy Code (IBC).</p>
                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <Item className='service-item'>
                <h3>For Operational Creditor</h3>
                <p className='ab-text'>Empower Operational Creditors to safeguard your interests and optimize your recovery within the complexities of the Insolvency and Bankruptcy Code (IBC).</p>
                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} sm={4}>
              <Item className='service-item'>
                <h3>For Resolution Applicant</h3>
                <p className='ab-text'>Empower Resolution Applicants to navigate the complexities of the Insolvency and Bankruptcy Code (IBC). </p>
                <div className='more-text subscribe-btn'><Link to="#" className='blue-btn'>Read More </Link></div>
              </Item>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='blog-sec highlights-sec blue-bg padding-50'>
        <div className="bound">
          <div className="title-sec mb-30">
            <h3 className="comman-title">Highlights</h3>
            <div className="np-aero"><Link to="#" onClick={showPreviousThreehighlights}><KeyboardArrowLeftIcon /></Link><Link to="#" onClick={showNextThreehighlights}><KeyboardArrowRightIcon /></Link></div>
          </div>
          <Grid className="services-items" container spacing={2}>
            {visiblehighlights.map((item) => (
              <Grid className='s-item' item xs={12} md={4} key={item.id}>
                <Item className='service-item shadow-remove'>
                  <div className="post-img">
                    <img src={resolveImageUrl(item.image)} alt="banner" />
                  </div>
                  <div className="content-box">
                    <h3>{item.title}</h3>
                    <div className='ab-text' dangerouslySetInnerHTML={{ __html: item.description }}></div>
                    <div className='more-text subscribe-btn'>
                      <Link to={`/highlightsDetails/${item.id}/${item.title}`} className='blue-btn'>
                        Read More
                      </Link>
                    </div>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className='testmonial-sec padding-50'>
        <div className="bound">
          <div className="title-sec mb-30">
            <h3 className="comman-title">Testmonial</h3>
            <div className="np-aero"><Link to="#" onClick={showPreviousThreetestimonials}><KeyboardArrowLeftIcon /></Link><Link to="#" onClick={showNextThreetestimonials}><KeyboardArrowRightIcon /></Link></div>
          </div>
          <Grid className="tm-items" container spacing={2}>
            {visibletestimonials.map((item) => (
              <Grid item xs={12} md={4}>
                <Item className='tme-item'>
                  <div className="content-box">
                    <div className="quate-icon"><FormatQuoteIcon fontSize='large' /></div>
                    <p className='tm-text'><i dangerouslySetInnerHTML={{ __html: item.description }}></i></p>
                    <div className="authar-name"><img src={resolveImageUrl(item.image)} alt="banner" /><strong><h3>{item.title}</h3></strong></div>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className='blog-sec highlights-sec blue-bg padding-50'>
        <div className="bound">
          <div className="title-sec mb-30">
            <h3 className="comman-title">Blog Post</h3>
            <div className="np-aero"><Link to="#" onClick={showPreviousThree}><KeyboardArrowLeftIcon /></Link><Link to="#" onClick={showNextThree}><KeyboardArrowRightIcon /></Link></div>
          </div>
          <Grid className="services-items" container spacing={2}>
            {visibleTodos.map((item) => (
              <Grid className='s-item' item xs={12} md={4} key={item.id}>
                <Item className='service-item shadow-remove'>
                  <div className="post-img">
                    <img src={resolveImageUrl(item.image)} alt="banner" />
                  </div>
                  <div className="content-box">
                    <h3>{item.title}</h3>
                    <div className='ab-text' dangerouslySetInnerHTML={{ __html: item.description }}></div>
                    <div className='more-text subscribe-btn'>
                      <Link to={`/postdetails/${item.id}/${item.title}`} className='blue-btn'>
                        Read More
                      </Link>
                    </div>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}

export default HomePage