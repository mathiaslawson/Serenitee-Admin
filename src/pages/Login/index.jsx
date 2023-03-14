import React from 'react';
import { Grid, TextField, Button, Link, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Google from '../../components/OAuthButtons/Google';
import Microsoft from '../../components/OAuthButtons/Microsoft';
import './login.css'
import { Box } from '@mui/material';
import { display } from '@mui/system';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(./f1.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className='bg'/>
      <Grid item xs={12} sm={8} md={5} component="section" elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h2" fontWeight='bold' width='100%'>
            Welcome Back!!
          </Typography>
          
          <form className={classes.form} noValidate>
            <Box
              margin='2rem auto'
            >
                <Google />
                <Microsoft />
            </Box>

            <Typography color='#969CA5'>
                  Or Login with Email
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Work Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <br />
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{
                padding: '0.7rem'
              }}
            >
              Login
            </Button>
            <br />
            <br />
            <hr style={{
                
            }}/>
            <Grid container>
                <Box>
              <Grid item xs style={{
                display: 'flex',
                gap: '0.5rem',
                width: 'max-content'
              }}>
              <Typography fontWeight='' variant='h6' color="black">
                         Can't remember your password?
                    </Typography>
                <Link href="#" variant="body2" style={{
                    textDecoration: 'none'
                }}>
                    <Typography fontWeight='' variant='h6' color="#699958">
                         Reset Passowrd
                    </Typography>
                </Link>
              </Grid>

              {/* Don't have account */}
              <Grid item style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                    <Typography fontWeight='' variant='h6' color="black">
                         Don't have an account?
                    </Typography>
                <Link href="#" variant="body2" style={{
                    textDecoration: 'none',
                    display: 'flex',
                    gap: '0.5rem'
                }}>
                   <Typography fontWeight='' variant='h6' color="#699958">
                         Get Started
                    </Typography>
                </Link>
              </Grid>
              </Box>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
