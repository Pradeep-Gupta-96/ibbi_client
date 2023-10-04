import React, { useState } from 'react'
import "./auth.css"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, Divider, Grid, IconButton, InputAdornment } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const AnimatedGridItem = styled(Typography)`
font-family: 'Montserrat', sans-serif;
`;

function Signup() {

  const [visivility, setVisivility] = useState(false)
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate()

  const changeicons = () => {
    if (visivility === false) {
      setVisivility(true)
    } else {
      setVisivility(false)
    }
  }


  // Define a reusable function for making HTTP POST requests
  const postJsonData = async (url, jsonData) => {
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonData)
      })
      const result = await response.json()
      return result
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }

  // Define your form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget;
    const formData = new FormData(form);

    const API = `http://43.205.145.146:4000/user/signup`

    // Extract the specific form fields you want to send as JSON data
    const jsonData = {
      username: formData.get("username"),
      email: formData.get("username"),
      password: formData.get("username"),
    }
    try {
      // Make the HTTP POST request using the postJsonData function
      const result = await postJsonData(API, jsonData);
      if (result.message === 'Email is already registered') {
        setError('Email is already registered');
        setInfo(''); // Clear any existing info message
        setSuccess(''); // Clear any existing success message
      } else if (result.message === 'User registered successfully') {
        setSuccess('User registered successfully');
        setError(''); // Clear any existing error message
        setInfo(''); // Clear any existing info message
      } else {
        setInfo('Invalid Credential');
        setError(''); // Clear any existing error message
        setSuccess(''); // Clear any existing success message
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Form submission error:', error);
    }
  }

  React.useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      navigate('/')
    }
  })

  return (
    <>
      <div className="auth-content">
        <div className="bound">
          <Grid container>
            <Grid item xs={12} md={4}></Grid>
            <Grid className='p-50' item xs={12} md={4}>
              <Item className='auth-form'>
                <Avatar sx={{ mx: 'auto', mt: 5, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <AnimatedGridItem component="h1" variant="h6" sx={{ my: 1, textAlign: "center" }}>
                  Wellcome to IBC Support <DoneAllIcon />
                </AnimatedGridItem>
                <AnimatedGridItem component="h1" variant="subtitle1" sx={{ my: 1, textAlign: "center" }}>Please sign up to your account and start analyzing.</AnimatedGridItem>
                <Stack sx={{ width: '100%' }} spacing={2}>
                  {info && (
                    <Alert variant="outlined" severity="info">
                      {info}
                    </Alert>
                  )}
                  {error && (
                    <Alert variant="outlined" severity="error">
                      {error}
                    </Alert>
                  )}
                  {success && (
                    <Alert variant="outlined" severity="success">
                      {success}
                    </Alert>
                  )}
                </Stack>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={visivility ? "text" : "password"}
                    InputProps={{
                      endAdornment:
                        <InputAdornment position='end'>
                          <IconButton onClick={changeicons}>
                            {visivility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        </InputAdornment>
                    }}
                    id="password"
                    autoComplete="current-password"
                  />
                  <div className="links"> <Link to="/resetpassword">Forgot Password</Link> <Link to="/signin">Signin</Link></div>
                  <Button className='submit-btn' type="submit" variant="contained" > Sign Up</Button>
                </Box>
                <Divider />
                <Divider />
              </Item>

            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Signup