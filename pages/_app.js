import '../styles/globals.css';
import Router from 'next/router';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../config/theme';
import Layout from '../components/Layout'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import UserContextProvider from '../components/UserProvider';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Head>

      </Head>
        <ChakraProvider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
      </ChakraProvider>
    </UserContextProvider>
  )
}

export default MyApp
