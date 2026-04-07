'use client'
import BigHeader from '@/components/BigHeader';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { styled as styledComponent } from 'styled-components';
import taps from '../../../taps.json';

const StyledBigHeader = styled(BigHeader)(() => ({
  backgroundColor: '#fff',
  padding: ' 0 1rem',
  paddingRight: '2rem',
  width: 'fit-content',
  margin: '0 0 2rem',
}));

const StyledDivider = styled(Divider)(() => ({
  backgroundColor: '#8f8f8f',
  marginLeft: '0.5rem',
  marginRight: '0.5rem'
}));

const StyledCardHeader = styledComponent.div`
  position: relative;
  padding: 0.25rem 1rem 0 3.5rem;

  & > span:first-child {
    background: #fff;
    color: #000;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.25rem;
  }

  & h6 {
    color: #8f8f8f;
    font-size: 1rem;
  }
`;

const OnTapGridItem = styled(Grid)(() => `
  .MuiPaper-root {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`);


type Beer = {
  id: string | null,
  name: string,
  style: string,
  brewery: string,
  location: string | null,
  abv: string | null,
  ibu: string | null
}

interface Taps {
  [key: string]: Beer
}

export default function OnTap() {
  const beers: Taps = taps;
  const tapIndexes = Object.keys(beers);

  return (
    <>
      <StyledBigHeader>
        On Tap <span>Now</span>
      </StyledBigHeader>
      <Grid container spacing={2}>
        {tapIndexes.map(tapNumber => {
          const beer = beers[tapNumber];
          return (
            <OnTapGridItem key={beer.name} item xs={12} md={4}>
              <Card elevation={6} variant={beer.brewery === 'Elderbrew' ? 'elder' : undefined}>
                <StyledCardHeader>
                  <span>#{tapNumber}</span>
                  <Typography variant="h5">
                    {beer.name}
                  </Typography>
                  <Typography variant="h6">
                    <Stack direction="row">
                      {beer.style}
                      <StyledDivider orientation="vertical" flexItem variant="middle" />
                      {beer.abv} ABV
                      <StyledDivider orientation="vertical" flexItem variant="middle" />
                      {beer.ibu} IBU
                    </Stack>
                  </Typography>
                </StyledCardHeader>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5">
                    {beer.brewery}
                  </Typography>
                  {beer.location}
                </CardContent>
              </Card>
            </OnTapGridItem>
          )
        })}
      </Grid>
    </>
  );
}
