import React from 'react'
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
import { Alert, Box, Divider, Grid, IconButton, InputAdornment, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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

function ResetPassword() {
  const [visivility, setVisivility] = React.useState(false)
  const [visivility1, setVisivility1] = React.useState(false)
  const [visivility2, setVisivility2] = React.useState(false)
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [info, setInfo] = React.useState('');
  const navigate = useNavigate()

  const changeicons = () => {
    if (visivility === false) {
      setVisivility(true)
    } else {
      setVisivility(false)
    }
  }
  const changeicons1 = () => {
    if (visivility1 === false) {
      setVisivility1(true)
    } else {
      setVisivility1(false)
    }
  }
  const changeicons2 = () => {
    if (visivility2 === false) {
      setVisivility2(true)
    } else {
      setVisivility2(false)
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
      });
      const result = await response.json();
      return { response, result }; // Return both the response and result
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }

  // Define your form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Check if new password and confirm password match
    if (formData.get("Npassword") !== formData.get("Cpassword")) {
      setError('New password and confirm password do not match');
      setSuccess('');
      setInfo('');
      return; // Exit the function
    }

    const API = `http://43.205.145.146:4000/user/resetPassword`;

    // Extract the specific form fields you want to send as JSON data
    const jsonData = {
      email: formData.get("email"),
      password: formData.get("password"),
      newPassword: formData.get("Npassword"),
    };

    try {
      // Make the HTTP POST request using the postJsonData function

      const { response, result } = await postJsonData(API, jsonData); // Destructure response and result
      console.log(result.message);

      if (response.ok) {
        // Save the token in localStorage
        setSuccess('Password reset successful');
        setError('');
        setInfo('');
      } else {
        setInfo(result.message || 'Password reset failed');
        setSuccess('');
        setError('');
      }
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Form submission error:', error);
    }
  };

  React.useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      navigate('/')
    }
  })

  return (
    <><div className="auth-content">
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
              <AnimatedGridItem component="h1" variant="subtitle1" sx={{ my: 1, textAlign: "center" }}>
                Please Forgot your Password and start analyzing.
              </AnimatedGridItem>
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Npassword"
                  label="New Password"
                  type={visivility1 ? "text" : "password"}
                  InputProps={{
                    endAdornment:
                      <InputAdornment position='end'>
                        <IconButton onClick={changeicons1}>
                          {visivility1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                  }}
                  id="Npassword"
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Cpassword"
                  label="Conform Password"
                  type={visivility2 ? "text" : "password"}
                  InputProps={{
                    endAdornment:
                      <InputAdornment position='end'>
                        <IconButton onClick={changeicons2}>
                          {visivility2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                  }}
                  id="Cpassword"
                  autoComplete="current-password"
                />
                <Button className='submit-btn'
                  type="submit"
                  variant="contained"
                >
                  Update
                </Button>
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

export default ResetPassword