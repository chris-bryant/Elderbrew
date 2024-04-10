'use client'
import BigHeader from '@/components/BigHeader';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { styled } from 'styled-components';

const StyledBigHeader = styled(BigHeader)`
  letter-spacing: -.2rem;
`;

export default function About() {
  return (
    <>
      <Box sx={{
        textAlign: 'center',
        background: '#fff',
      }}>
        <StyledBigHeader>
          Drink Full, And <span>Descend</span>
        </StyledBigHeader>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' sx={{
        '& img': {
          width: { xs: '100%' },
          height: { xs: 'auto' },
          maxHeight: { xs: 'auto', md: '530px' },
        }
      }}>
        <Image src="/Elderbrew/outside.jpg" alt="Elderbrew" sizes="100vw" width="600" height="900" style={{ width: '100%', height: 'auto' }} />
        <Image src="/Elderbrew/gray-worry.jpg" alt="Elderbrew" sizes="100vw" width="900" height="600" style={{ width: '100%', height: 'auto' }} />
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' sx={{
        '& img': {
          width: { xs: '100%' },
          height: { xs: 'auto' },
          maxHeight: { xs: 'auto', md: '530px' },
        }
      }}>
        <Image src="/Elderbrew/merch.jpg" alt="Elderbrew" sizes="100vw" width="900" height="600" style={{ width: '100%', height: 'auto' }} />
        <Image src="/Elderbrew/game.jpg" alt="Elderbrew" sizes="100vw" width="600" height="900" style={{ width: '100%', height: 'auto' }} />
      </Stack>
    </>
  );
}
