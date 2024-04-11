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
          maxHeight: { xs: 'initial', md: '530px' },
        }
      }}>
        <Image
          src="outside.jpg"
          alt="Elderbrew"
          sizes="100vw"
          width="200"
          height="300"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src="gray-worry.jpg"
          alt="Elderbrew"
          sizes="100vw"
          width="300"
          height="200"
          style={{ width: '100%', height: 'auto' }}
        />
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' sx={{
        '& img': {
          width: { xs: '100%' },
          height: { xs: 'auto' },
          maxHeight: { xs: 'initial', md: '530px' },
        }
      }}>
        <Image
          src="merch.jpg"
          alt="Elderbrew"
          sizes="100vw"
          width="300"
          height="200"
          style={{ width: '100%', height: 'auto' }}
        />
        <Image
          src="game.jpg"
          alt="Elderbrew"
          sizes="100vw"
          width="200"
          height="300"
          style={{ width: '100%', height: 'auto' }}
        />
      </Stack>
    </>
  );
}
