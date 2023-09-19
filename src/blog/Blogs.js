import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import aboutimg from '../utility/about-img.jpeg'
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Blogs = () => {
    return (
        <>
            <div className="banner">
                <div className="bound">
                    <div className="page-title">Blog</div>
                </div>
            </div>
            <div className="page-content blue-bg pb-40">
                <div className="bound">
                    <div className='blog-sec highlights-sec padding-50'>
                        <div className="bound">
                            <div className="add-post-sec">
                                <h3>Add new post</h3>
                                <Box component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: '1%', width: '48%' }, '& .MuiTextField-root:last-child': { m: '1%', width: '98%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                       <TextField
                                            required
                                            id="outlined-required"
                                            label="Post Title"
                                            />
                                        <TextField
                                        required
                                        id="outlined-required"
                                        type='file'
                                        />
                                        <TextField
                                        required
                                        id="outlined-required"
                                        label="Post Content"
                                        /> 
                                    </Box>
                            </div>
                            <Grid className="services-items" container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Item className='service-item shadow-remove'>
                                        <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                                        <div className="content-box">
                                            <h3>Post 1</h3>
                                            <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                                            <div className='more-text subscribe-btn'><Link to="/postdetails" className='blue-btn'>Read More </Link></div>
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Item className='service-item shadow-remove'>
                                        <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                                        <div className="content-box">
                                            <h3>Post 2</h3>
                                            <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                                            <div className='more-text subscribe-btn'><Link to="/postdetails" className='blue-btn'>Read More </Link></div>
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Item className='service-item shadow-remove'>
                                        <div className="post-img"><img src={aboutimg} alt="banner" /></div>
                                        <div className="content-box">
                                            <h3>Post 3</h3>
                                            <p className='ab-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
                                            <div className='more-text subscribe-btn'><Link to="/postdetails" className='blue-btn'>Read More </Link></div>
                                        </div>
                                    </Item>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs