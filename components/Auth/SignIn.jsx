import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Text, useToast, Stack } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { post } from '../../utils/apiHelper';
import UserContext from '../../utils/userContext';
import webRoutes from '../../utils/webRoutes';
import { FailedOperationToast, SuccessfulOperationToast } from '../Toasts';

const theme = createTheme();

export default function SignIn() {
  
    const { dispatch } = useContext(UserContext);
    const toast = useToast();
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
    const data = new FormData(e.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    const dataToBeSent = {
        username,
        password,
        requestType: 'POST',
        requestUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/users/login`,
      };
  
      const apiResponse = await post(dataToBeSent, '/api/login');
  
      if (apiResponse.status === 'success') {
        SuccessfulOperationToast(toast, 'Welcome! Please wait to be redirected to the homepage!');
        localStorage.setItem('userID', apiResponse.data._id);
        dispatch({ type: 'login' });
  
        return setTimeout(() => router.push('/'), 1000);
      }
  
      return FailedOperationToast(toast, apiResponse.message);
    };
    
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" passHref>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2" passHref>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}