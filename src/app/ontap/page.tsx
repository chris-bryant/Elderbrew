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
          <Card elevation={6} variant="elder">
            <StyledCardHeader>
              <span>#1</span>
              <Typography variant="h5">
                Mama Thai&apos;d
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Pad Thai-Inspired Pale Ale
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  6.0% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Elderbrew
              </Typography>
              Bristol, TN
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#2</span>
              <Typography variant="h5">Atalanta Plum Saison</Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Atalanta Plum Saison
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5.2% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Orpheus Brewing
              </Typography>
              Atlanta, GA
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="elder">
            <StyledCardHeader>
              <span>#3</span>
              <Typography variant="h5">
                Rat Trap
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Belgian Saison
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  6.5% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  28 IBU
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
                Delicious IPA
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  IPA
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  7.7% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  75 IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Stone Brewing
              </Typography>
              Escondido, CA
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#5</span>
              <Typography variant="h5">
                Blueberry Crumble
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Sour Ale
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5.2% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Destihl Brewery
              </Typography>
              Normal, IL
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <StyledCardHeader>
              <span>#6</span>
              <Typography variant="h5">
                Neon Renaissance
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Pink Guava Gose
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5.9% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Printshop Brewing
              </Typography>
              Knoxville, TN
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={6}>
            <StyledCardHeader>
              <span>#7</span>
              <Typography variant="h5">
                Tiki Tonic
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Cider
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5% ABV
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
          <Card variant="elder">
            <StyledCardHeader>
              <span>#8</span>
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
              <span>#9</span>
              <Typography variant="h5">
                Transmigration of Souls
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Double IPA
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  10% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Orpheus Brewing
              </Typography>
              Atlanta, GA
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={6}>
            <StyledCardHeader>
              <span>#10</span>
              <Typography variant="h5">
                Navel Gazer
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Imperial Stout
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  10% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                New Hights
              </Typography>
              Nashville, TN
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="elder">
            <StyledCardHeader>
              <span>#11</span>
              <Typography variant="h5">
                Thai Fighter
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Pad Thai-Inspired Pale Ale (HOT!)
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  6% ABV
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
                &apos;Mosa
              </Typography>
              <Typography variant="h6">
                <Stack direction="row">
                  Sour Ale
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  5.8% ABV
                  <StyledDivider orientation="vertical" flexItem variant="middle" />
                  -- IBU
                </Stack>
              </Typography>
            </StyledCardHeader>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5">
                Southern Grist
              </Typography>
              Nashville, TN
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
