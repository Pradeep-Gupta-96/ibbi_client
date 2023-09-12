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
import { Divider, Grid, IconButton, InputAdornment } from '@mui/material';
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

    const changeicons = () => {
        if (visivility === false) {
            setVisivility(true)
        } else {
            setVisivility(false)
        }
    }

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
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="username"
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
                                <div className="links"> <Link to="/resetpassword">Forgot Password</Link> <Link to="/signup">Signup</Link></div>
                                <Button className='submit-btn' type="submit" variant="contained" > Sign In </Button>
                                
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