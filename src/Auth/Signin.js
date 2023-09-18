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
import { Link } from 'react-router-dom';

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



function Signin() {
    const [visivility, setVisivility] = React.useState(false)
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    

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

        const API = `http://43.205.145.16:4000/user/signin`;

        // Extract the specific form fields you want to send as JSON data
        const jsonData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };
        try {
            // Make the HTTP POST request using the postJsonData function
            const { response, result } = await postJsonData(API, jsonData); // Destructure response and result
            console.log(result.message);

            if (response.ok) {
                // Save the token in localStorage
                localStorage.setItem('token', result.token);
                setSuccess('Login successful');
                setError('');

            } else {
                setError(result.message || 'Login failed');
                setSuccess('');
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Form submission error:', error);
        }
    };


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
                                <AnimatedGridItem component="h1" variant="subtitle1" sx={{ my: 1, textAlign: "center" }}>
                                    Please sign in to your account and start analyzing.
                                </AnimatedGridItem>
                                <Stack sx={{ width: '100%' }} spacing={2}>
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
                                    <div className="links"> <Link to="/resetpassword">Forgot Password</Link> </div>
                                    <Button className='submit-btn' type="submit" variant="contained" > Sign In </Button>
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

export default Signin