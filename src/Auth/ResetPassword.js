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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function ResetPassword() {
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
      <Grid container className='container' spacing={0}>
        <Grid item className='container1' xs={6} md={8}>
        </Grid>
        <Grid item className='container2' xs={6} md={4}>
        </Grid>
        <Grid item className='login-container' xs={4}>
          <Item>
            <Avatar sx={{ mx: 'auto', mt: 5, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ my: 1, textAlign: "center" }}>
              Recqarz
            </Typography>
            <Typography component="h1" variant="h6" sx={{ my: 1, textAlign: "center" }}>
              Wellcome to Recqarz <DoneAllIcon />
            </Typography>
            <Typography component="h1" variant="subtitle1" sx={{ my: 1, textAlign: "center" }}>
              Please sign in to your account and start analyzing.
            </Typography>
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
            <Button
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
            <Divider />
            <Divider />
          </Item>
        </Grid>

      </Grid>
    </>
  )
}

export default ResetPassword