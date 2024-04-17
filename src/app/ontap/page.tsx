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

export default function OnTap() {
  return (
    <>
      <StyledBigHeader>
        On Tap <span>Now</span>
      </StyledBigHeader>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card elevation={6}>
            <StyledCardHeader>
              <span>#1</span>
              <Typography variant="h5">
                Pitfall
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Apricot Sour
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5.5% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Wanderlinger
              </Typography>
              Chattanooga, TN
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#2</span>
              <Typography variant="h5">Imperial PB&amp;J Stout</Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Stout
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  10% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Tailgate Brewery
              </Typography>
              Nashville, TN
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="elder">
            <StyledCardHeader>
              <span>#3</span>
              <Typography variant="h5">Depression Breakfast</Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Oatmeal Stout
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5.5% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  30 IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Elderbrew
              </Typography>
              Bristol!
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={6}>
            <StyledCardHeader>
              <span>#4</span>
              <Typography variant="h5">
                Deadhead
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  West Coast IPA
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  6.9% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  60 IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Destihl
              </Typography>
              Normal, IL
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#5</span>
              <Typography variant="h5">
                Coffee &amp; Cream
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Cream Ale
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5.6% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                New Heights Brewery
              </Typography>
              Nashville, TN
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#6</span>
              <Typography variant="h5">
                Pickle Kölsch
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Kölsch
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Tailgate Brewery
              </Typography>
              Nashville, TN
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={6}>
            <StyledCardHeader>
              <span>#7</span>
              <Typography variant="h5">
                Mayor Berry
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Blueberry Lavender Cider
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  6.7% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Diskin Cider
              </Typography>
              Nashville, TN
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#8</span>
              <Typography variant="h5">
                Southern Crisp
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Pilsner
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  4.4% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Southern Grist Brewing
              </Typography>
              Nashville, TN
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#9</span>
              <Typography variant="h5">
                Smithwick&apos;s Red Ale
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Red Ale
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  8% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  80 IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Guinness
              </Typography>
              Ireland
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={6}>
            <StyledCardHeader>
              <span>#10</span>
              <Typography variant="h5">
                Ancient Trees
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Saison
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  6.6% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Albright Grove Brewing
              </Typography>
              Knoxville, TN
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="elder">
            <StyledCardHeader>
              <span>#11</span>
              <Typography variant="h5">
                Dark Star
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Black Lager
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Elderbrew
              </Typography>
              Bristol!
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#12</span>
              <Typography variant="h5">
                Life Itself
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Key Lime Pie Gose
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  4.5% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Great Raft Brewing
              </Typography>
              Shreveport, LA
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
