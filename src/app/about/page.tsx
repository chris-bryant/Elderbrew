'use client'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import BigHeader from '@/components/BigHeader';
import { styled } from '@mui/material/styles';

const StyledBigHeader = styled(BigHeader)(() => ({
  backgroundColor: '#fff',
  padding: ' 0 1rem',
  width: 'fit-content',
  margin: '0 0 2rem',
}));

export default function About() {
  return (
    <>
      <StyledBigHeader>What does <span><i>ale</i></span> mean?</StyledBigHeader>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        <Stack sx={{
          alignItems: 'center',
          '& img': {
            maxWidth: '80vw',
            height: 'auto',
          }
        }}>
          <Image
            src="elderbrew-00572.jpg"
            width="500"
            height="333"
            alt="Elderbrew"
          />
          <Image
            src="elderbrew-00608.jpg"
            width="500"
            height="333"
            alt="Elderbrew"
          />
        </Stack>
        <Stack spacing={4}>
          <Typography variant="body1">
            Elderbrew began as a question. What does <i>ale</i> mean, and why do pirates prefer it over lager? This question led to a 
            years-long deep dive into the history of beer and brewing by head brewer and owner Chris Bryant. As curiosity led to discovery, 
            it became clear that in order to really understand beer, one must brew beer&mdash;and so Elderbrew was born.
          </Typography>
          <Typography variant="body1">
            After years of homebrewing and attending popular local beer festivals, Elderbrew opened at 24 6th Street in downtown Bristol, TN in 
            September 2017. Since then, we have had only one real mission&mdash;to bring to you some of the strange brews we have shared 
            with you at the beer festivals over the years, along with an ever-expanding repertoire of new beers.
          </Typography>
          <Typography variant="body1">
            We take pride in being unique. We celebrate the weird. With live music from local musicians and art showings from local 
            artists, Elderbrew&apos;s taproom has become a hub for the creative side of Appalachia that is often
            overshadowed by the legacy of country music and the roar of Nascar engines.
          </Typography>
          <Typography variant="body1">
            So if you&apos;re local, or you just find yourself passing through our corner of Appalachia, stop in and say hi.
            Have a beer, check out some art, listen to some tunes, and make some new friends.
          </Typography>
          <Typography variant="body1">
            And of course...
          </Typography>
          <StyledBigHeader sx={{ fontSize: '1.5rem !important', padding: '0.25rem 0.5rem 0.25rem' }}>Drink Full, And <span><i>Descend</i></span></StyledBigHeader>
        </Stack>
      </Stack>
    </>
  );
}
