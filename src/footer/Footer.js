import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './Footer.css'
import { Grid } from '@mui/material'

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
                <Grid item xs={12} md={6}>
                    <Item className='info-box shadow-remove'>
                    <div className="cont-info"><strong>CALL US 24/7: </strong>0987654321</div>
                    
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item className='info-box shadow-remove'>
                    <div className="cont-info"><strong>EMAIL ADDRESS: </strong>info@ibcsupport.com</div>
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