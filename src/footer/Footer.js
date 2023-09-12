import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './Footer.css'
import { Grid } from '@mui/material'
import footerlogo from '../utility/logo.png'
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Footer = () => {
    return (
        <>
        <div className='footer padding-50'>
            <div className="bound">
                <Grid className="contact-infos" container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Item className='info-box shadow-remove'>
                            <h3 className="comman-title mb-30">About</h3>
                            <div className="f-logo"><img src={footerlogo} alt="banner" /></div>
                            <div className="fab-content">IBC Support Forum, established in 2016, stands as a stalwart in the Indian financial landscape, offering a comprehensive suite of legal services to financial creditors, operational creditors, and resolution applicants. </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item className='info-box shadow-remove'>
                            <h3 className="comman-title mb-30">Content</h3>
                    
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item className='info-box shadow-remove'>
                            <h3 className="comman-title mb-30">Contact Info</h3>
                            <ul className='c-ingo'>
                                <li><LocationOnIcon /> Global Business Park, MG Road, Gurugram</li>
                                <li><CallIcon /> 0987654321  </li>
                                <li><EmailIcon /> info@ibcsupport.com</li>
                            </ul>
                            <div className="social-icon">
                                Social Icons: 
                                <Link to="https://facebook.com/#" target="_blank"><FacebookIcon /></Link>
                                <Link to="https://twitter.com/#" target="_blank"><TwitterIcon /></Link>
                                <Link to="https://www.linkedin.com//#" target="_blank"><LinkedInIcon /></Link>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
        <div className='copyright'>
            <div className="bound">
            <Grid className="copyright-content" container spacing={2}>
                <Grid className='pt-0' item xs={12} md={12}>
                    <Item className='shadow-remove remove-bg'>
                    <p>© 2023 IBC Support, All Rights Reserved</p>
                    </Item>
                </Grid>
                </Grid>
            </div>
        </div>
        </>
    )
}

export default Footer