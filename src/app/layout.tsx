'use client'
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "./globals.css";
import Nav from "@/components/Nav";
import { Container, Box, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

const Footer = styled(Box)(() => ({
  backgroundColor: '#000',
  // boxShadow: '0 .2rem 25px rgba(255, 0, 0, 1)',
  boxShadow: '0 0rem 10rem rgb(255 0 0)',
  // boxShadow: '0 -5rem 5rem rgb(0 0 0)',
  borderTop: '1px solid red',
  alignItems: 'center',
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
              <header>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" marginTop={4} marginBottom={4}>
                  <Link href="/">
                    <Image
                      src="/elderbrew-bw.png"
                      width="200"
                      height="127"
                      alt="Elderbrew"
                    />
                  </Link>
                  <Nav />
                </Stack>
                <Divider />
              </header>
              <Box marginTop={4} marginBottom={4}>
                {children}
              </Box>
            </Container>
            <Footer marginTop={28} padding={8}>
              <Container maxWidth="lg">
                <Stack
                  direction={{
                    xs: 'column',
                    sm: 'row',
                  }}
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    '& > *': {
                      width: {
                        xs: '100%',
                        sm: '33%',
                      },
                    },
                    '& img': {
                      maxWidth: '80vw',
                      height: 'auto',
                    },
                    flexWrap: {
                      xs: 'wrap',
                      lg: 'nowrap'
                    }
                  }}
                  spacing={{
                    xs: 4,
                    sm: 0,
                  }}
                >
                  <Stack spacing={2} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                    <p>
                      <Link href="/about">Our Story</Link>
                    </p>
                    <p>
                      <Link href="">On Tap</Link>
                    </p>
                    <p>
                      <Link href="">Contact</Link>
                    </p>
                  </Stack>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      order: {
                        xs: -1,
                        lg: 0,
                      },
                      flexBasis: {
                        xs: '100%',
                        lg: 'auto',
                      },
                      '& > img': {
                        marginBottom: {
                          xs: '2rem',
                          lg: '0',
                        }
                      }
                    }}
                  >
                    <Image
                      src="/elderbrew-bw.png"
                      width="500"
                      height="250"
                      alt="Elderbrew"
                    />
                  </Box>
                  <Stack justifyContent="flex-end" alignItems={{ xs: 'center', sm: 'flex-end' }} spacing={2}>
                      <Typography variant="h5">Hours</Typography>
                    <p>Monday - Friday 5-10pm</p>
                    <p>Saturday 3-10pm</p>
                    <p>
                      24 6th Street
                      Bristol, TN 37620
                    </p>
                    <Stack direction="row" spacing={1}>
                      <Link href="https://www.facebook.com/elderbrew/">
                        <FacebookIcon fontSize="large" />
                      </Link>
                      <Link href="https://www.instagram.com/elderbrew/">
                        <InstagramIcon fontSize="large" />
                      </Link>
                    </Stack>
                  </Stack>
                </Stack>
              </Container>
            </Footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
