import React from 'react';
import { Grid, TextField, Button, Link, Typography, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Google from '../../components/OAuthButtons/Google';
import Microsoft from '../../components/OAuthButtons/Microsoft';
import * as routes from '../../constants/routes'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = ({onSubmit, onChange}) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className='bg'/>
      <Grid item xs={12} sm={8} md={5} component="section" elevation={6} square>
        <div className={classes.paper}>
        <Typography variant="h3" fontWeight='bold' width='100%' fontSize='1.9rem'>
            Get Started
          </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
          <Box
              margin='2rem auto'
            >
                <Google />
                <Microsoft />
            </Box>

            <Typography color='#969CA5'>
                  Or Sign up with Email
            </Typography>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange = {onChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange = {onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange = {onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange = {onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange = {onChange}
                />
              </Grid>
              <Grid item xs={12}>
              <br />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <br /><br />
                <hr style={{
                
              }}/>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
              <Typography fontWeight='' variant='h6' color="black" fontSize='0.8rem'>
                         Don't have an account?
                    </Typography>
              <Link href="#" variant="body2" style={{
                    textDecoration: 'none',
                    display: 'flex',
                    gap: '0.5rem'
                }} to={routes.SIGN_IN}>
                   <Typography fontWeight='' variant='h6' color="#699958" fontSize='0.8rem'>
                         Get Started
                    </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
