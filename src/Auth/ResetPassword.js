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
const AnimatedGridItem = styled(Typography)`
font-family: 'Montserrat', sans-serif;
`;

function ResetPassword() {
  const [visivility, setVisivility] = React.useState(false)
  const [visivility1, setVisivility1] = React.useState(false)
  const [visivility2, setVisivility2] = React.useState(false)

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