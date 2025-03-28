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

export default function OnTap() {
  const beers = [
    // First Row
    {
      name: "Pumpkin Ale",
      style: "Pumpkin Ale",
      brewery: 'Schlafly',
      breweryLocation: 'St. Louis, MO',
      abv: '8.0%',
      ibu: '16',
    },
    {
      name: "Tiny Umbrellas",
      style: "Mango Pineapple Guava Sour",
      brewery: 'Xul',
      breweryLocation: 'Knoxville, TN',
      abv: '7%',
      ibu: '--',
    },
    {
      name: "Chimay",
      style: "Belgian Quad",
      brewery: 'Chimay',
      breweryLocation: 'Belgium',
      abv: '9%',
      ibu: '--',
    },

    // Second Row
    {
      name: "Juice Pants IPA",
      style: "IPA",
      brewery: 'Maplewood Brewing',
      breweryLocation: 'Chicago, IL',
      abv: '7%',
      ibu: '55',
    },
    {
      name: "Oatmeal Porter",
      style: "Oatmeal Porter",
      brewery: 'Highland Brewing',
      breweryLocation: 'Asheville, NC',
      abv: '5.9%',
      ibu: '--',
    },
    {
      name: "Bourbon Barrel PB+J Milk Stout",
      style: "Milk Stout",
      brewery: 'Tailgate Brewery',
      breweryLocation: 'Nashville, TN',
      abv: '9.1%',
      ibu: '--',
    },

    // Third Row
    {
      name: "Babe Magnet",
      style: "Rosé Cider",
      brewery: 'Diskin Cider',
      breweryLocation: 'Nashville, TN',
      abv: '5.8%',
      ibu: '--',
    },
    {
      name: "London Dungeon",
      style: "English Bitter",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '4.0%',
      ibu: '--',
    },
    {
      name: "Narragansett",
      style: "Lager",
      brewery: 'Narragansett',
      breweryLocation: 'Providence, RI',
      abv: '5%',
      ibu: '--',
    },

    // Fourth Row
    {
      name: "Duchesse",
      style: "Chocolate Cherry Flanders Red",
      brewery: 'Brouwerij Verhaeghe',
      breweryLocation: 'Belgium',
      abv: '6.8%',
      ibu: '--',
    },
    {
      name: "Thai Fighter",
      style: "Pad Thai-Inspired Pale Ale (HOT)",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '6%',
      ibu: '--',
    },
    {
      name: "'Pickle Kölsch",
      style: "Kölsch",
      brewery: 'Tailgate Brewing',
      breweryLocation: 'Nashville, TN',
      abv: '5.0%',
      ibu: '--',
    },
  ]
  return (
    <>
      <StyledBigHeader>
        On Tap <span>Now</span>
      </StyledBigHeader>
      <Grid container spacing={2}>
        {beers.map((beer, i) => (
          <OnTapGridItem key={beer.name} item xs={12} md={4}>
            <Card elevation={6} variant={beer.brewery === 'Elderbrew' ? 'elder' : undefined}>
              <StyledCardHeader>
                <span>#{i + 1}</span>
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
                {beer.breweryLocation}
              </CardContent>
            </Card>
          </OnTapGridItem>
        ))}
      </Grid>
    </>
  );
}
