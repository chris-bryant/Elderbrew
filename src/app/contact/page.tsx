'use client'
import BigHeader from "@/components/BigHeader";
import { Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledBigHeader = styled(BigHeader)(() => ({
  backgroundColor: '#fff',
  padding: ' 0 1rem',
  width: 'fit-content',
  margin: '0 0 2rem',
  paddingRight: '2rem',
}));

export default function Contact() {
  return (
    <>
      <StyledBigHeader>Say <span>Hello</span></StyledBigHeader>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <iframe
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjfTZlGh2UIgRwpWf8DsrvMw&key=AIzaSyBroKYjCVfCRcH9YRNH3RxYJ1_zscytFt8"
        ></iframe>
        <Typography variant="body1">
          Reach us through Facebook, Instagram, or email us directly at elderbrewtn@gmail.com. But we prefer you just come visit.
        </Typography>
      </Stack>
    </>
  );
}
