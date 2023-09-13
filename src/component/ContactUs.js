import React from 'react'
import banner from '../utility/banner_1.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUs = () => {
  return (
    <>
        <div className="banner">
            <div className="bound">
                <img src={banner} alt="banner" />
                
            </div>
        </div>
        <div className="page-content">
            <div className="bound">
                
                <div className="contact-form">
                    <div className="page-title">Contact Us</div>
                    <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: '1%', width: '48%' }, '& .MuiTextField-root:last-child': { m: '1%', width: '98%' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        />
                        <TextField
                        required
                        id="outlined-disabled"
                        label="Email"
                       />
                        <TextField
                        id="outlined-number"
                        label="Phone"
                        
                        // InputLabelProps={{
                        //     shrink: true,
                        // }}
                        />
                        <TextField id="outlined-search" label="Location" type="search" />
                        <TextField
                        id="outlined-helperText"
                        label="Query"
                        //defaultValue="Query"
                        helperText="Some important text"
                        />
                        
                    </div>
                    <div className="submit-row">
                        <Button className='submit-btn' type="submit" variant="contained" > Submit </Button>
                    </div>
                    </Box>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs