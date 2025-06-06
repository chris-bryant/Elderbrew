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
      name: "Dr. Robot",
      style: "Cherry Lemon Sour",
      brewery: 'Monday Night Brewing',
      breweryLocation: 'Atlanta, GA',
      abv: '5.0%',
      ibu: '--',
    },
    {
      name: "Blackberry Hug",
      style: "Sour Ale",
      brewery: 'Wanderlinger',
      breweryLocation: 'Chattanooga, TN',
      abv: '7.3%',
      ibu: '--',
    },
    {
      name: "Coffee &amp; Cream Ale",
      style: "Cream Ale",
      brewery: 'New Heights',
      breweryLocation: 'Nashville, TN',
      abv: '5.6%',
      ibu: '--',
    },

    // Second Row
    {
      name: "Big DumbA",
      style: "American IPA",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '6.7%',
      ibu: '58',
    },
    {
      name: "Depression Breakfast",
      style: "Oatmeal Stout",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '6.1%',
      ibu: '31',
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
      name: "Mayor Berry",
      style: "Blueberry Lavender Cider",
      brewery: 'Diskin Cider',
      breweryLocation: 'Nashville, TN',
      abv: '5.7%',
      ibu: '--',
    },
    {
      name: "Limonata",
      style: "Hard Italian Soda",
      brewery: 'Bravazzi',
      breweryLocation: 'Nashville, TN',
      abv: '4.2%',
      ibu: '--',
    },
    {
      name: "Peroni",
      style: "Lager",
      brewery: 'Birra Peroni',
      breweryLocation: 'Rome, Italy',
      abv: '4.7%',
      ibu: '--',
    },

    // Fourth Row
    {
      name: "Rat Trap (Smoked Wheat Edition)",
      style: "Belgian Saison",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '6.5%',
      ibu: '--',
    },
    {
      name: "Crushinator",
      style: "Session IPA",
      brewery: 'Maplewood Brewing',
      breweryLocation: 'Chicago, IL',
      abv: '4.5%',
      ibu: '32',
    },
    {
      name: "'London Dungeon",
      style: "English Bitter",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '4.0%',
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
