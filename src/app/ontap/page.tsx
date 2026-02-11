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
      name: "Big Noise Transmission",
      style: "Pale Ale",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '5.5%',
      ibu: '30',
    },
    {
      name: "PB&amp;J Mixtape",
      style: "Sour",
      brewery: 'Xul Beer Co',
      breweryLocation: 'Knoxville, TN',
      abv: '6.5%',
      ibu: '--',
    },
    {
      name: "Blackbeary Hug",
      style: "Sour Ale",
      brewery: 'Wanderlinger Brewing',
      breweryLocation: 'Nashville, TN',
      abv: '6.7%',
      ibu: '--',
    },

    // Second Row
    {
      name: "Paper Crowns",
      style: "Hazy IPA",
      brewery: 'Xul Beer Co',
      breweryLocation: 'Knoxville, TN',
      abv: '6.8%',
      ibu: '--',
    },
    {
      name: "German Porter",
      style: "Porter",
      brewery: 'Urban Chestnut Brewing',
      breweryLocation: 'St. Louis, MO',
      abv: '7%',
      ibu: '--',
    },
    {
      name: "Magic Wands",
      style: "Pineapple Upside Down Sour",
      brewery: 'Xul Beer Co',
      breweryLocation: 'Knoxville, TN',
      abv: '6.4%',
      ibu: '--',
    },

    // Third Row
    {
      name: "Limonata",
      style: "Hard Italian Soda",
      brewery: 'Bravazzi',
      breweryLocation: 'Nashville, TN',
      abv: '4.2%',
      ibu: '--',
    },
    {
      name: "Navel Gazer",
      style: "Imperial Stout",
      brewery: 'New Heights',
      breweryLocation: 'Nashville, TN',
      abv: '9.2%',
      ibu: '--',
    },
    {
      name: "Narragansett",
      style: "Lager",
      brewery: 'Narragansett Brewing',
      breweryLocation: 'Providence, RI',
      abv: '5%',
      ibu: '--',
    },

    // Fourth Row
    {
      name: "Tank 7",
      style: "Farmhouse Ale",
      brewery: 'Boulevard Brewing Co',
      breweryLocation: 'Kansas City, MO',
      abv: '8.5%',
      ibu: '38',
    },
    {
      name: "Blueberry Cider",
      style: "Cider",
      brewery: 'Woodchuck',
      breweryLocation: 'Middlebury, VT',
      abv: '5%',
      ibu: '--',
    },
    {
      name: "Pumpkni Ale",
      style: 'Pumpkin Ale',
      brewery: "Schlafly Brewing",
      breweryLocation: 'St. Louis, MO',
      abv: '8.0%',
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
