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
      name: "Mama Thai'd",
      style: "Pad Thai-Inspired Pale Ale",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '6.0%',
      ibu: '--',
    },
    {
      name: "Atalanta Plum Saison",
      style: "Plum Saison",
      brewery: 'Orpheus Brewing',
      breweryLocation: 'Atlanta, GA',
      abv: '5.2%',
      ibu: '--',
    },
    {
      name: "Rat Trap",
      style: "Belgian Saison",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '6.5%',
      ibu: '28',
    },

    // Second Row
    {
      name: "Delicious IPA",
      style: "IPA",
      brewery: 'Stone Brewing',
      breweryLocation: 'Escondido, CA',
      abv: '7.7%',
      ibu: '75',
    },
    {
      name: "Blueberry Crumble",
      style: "Sour Ale",
      brewery: 'Destihl Brewery',
      breweryLocation: 'Normal, IL',
      abv: '5.2%',
      ibu: '--',
    },
    {
      name: "Neon Renaissance",
      style: "Pink Guava Gose",
      brewery: 'Printshop Brewing',
      breweryLocation: 'Knoxville, TN',
      abv: '5.9%',
      ibu: '--',
    },

    // Third Row
    {
      name: "Tiki Tonic",
      style: "Cider",
      brewery: 'Diskin Cider',
      breweryLocation: 'Nashville, TN',
      abv: '5%',
      ibu: '--',
    },
    {
      name: "Dark Star",
      style: "Black Lager",
      brewery: 'Elderbrew',
      breweryLocation: 'Bristol!',
      abv: '5%',
      ibu: '--',
    },
    {
      name: "Transmigration of Souls",
      style: "Double IPA",
      brewery: 'Orpheus Brewing',
      breweryLocation: 'Atlanta, GA',
      abv: '10%',
      ibu: '--',
    },

    // Fourth Row
    {
      name: "Navel Gazer",
      style: "Imperial Stout",
      brewery: 'New Heights',
      breweryLocation: 'Nashville, TN',
      abv: '10%',
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
      name: "'Mosa",
      style: "Sour Ale",
      brewery: 'Southern Grist',
      breweryLocation: 'Nashville, TN',
      abv: '5.8%',
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
