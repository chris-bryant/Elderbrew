'use client';
import { Roboto_Condensed, Righteous } from 'next/font/google'; 
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    elder: true;
  }
}

const roboto = Roboto_Condensed({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const righteous = Righteous({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    body1: {
      fontWeight: 500,
      fontSize: '1.2rem'
    },
    button: {
      // fontFamily: righteous.style.fontFamily,
      fontWeight: 'bold',
      '&:hover': {
        color: '#000',
        backgroundColor: '#fff',
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 'bold',
          '&:hover': {
            color: '#000',
            backgroundColor: '#fff',
          }
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          minHeight: '150px',
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: 0,
          boxShadow: 'inset -0.5rem -0.5rem 1rem rgba(255, 255, 255, 0.15)',
          // border: "5px outset rgba(255, 255, 255, 0.5)",
        },
      },
      variants: [
        {
          props: { variant: 'elder' },
          style: {
            textTransform: 'none',
            border: `2px solid rgba(255, 0, 0, 0.5)`,
            boxShadow: '0 0 1rem rgba(255, 0, 0, 0.5)'
          },
        },
      ]
    }
  }
});

export default theme;
