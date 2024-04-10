'use client'
import BigHeader from '@/components/BigHeader';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Image, { ImageLoaderProps } from 'next/image';
import { styled } from 'styled-components';

const StyledBigHeader = styled(BigHeader)`
  letter-spacing: -.2rem;
`;

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `http://www.elderbrew.com/${src}?w=${width}&q=${quality || 75}`
}

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
        <Image
          src="outside.jpg"
          alt="Elderbrew"
          sizes="100vw"
          width="600"
          height="900"
          style={{ width: '100%', height: 'auto' }}
          loader={imageLoader}
        />
        <Image
          src="gray-worry.jpg"
          alt="Elderbrew"
          sizes="100vw"
          width="900"
          height="600"
          style={{ width: '100%', height: 'auto' }}
          loader={imageLoader}
        />
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' sx={{
        '& img': {
          width: { xs: '100%' },
          height: { xs: 'auto' },
          maxHeight: { xs: 'auto', md: '530px' },
        }
      }}>
        <Image
          src="merch.jpg"
          alt="Elderbrew"
          sizes="100vw"
          width="900"
          height="600"
          style={{ width: '100%', height: 'auto' }}
          loader={imageLoader}
        />
        <Image
          src="game.jpg"
          alt="Elderbrew"
          sizes="100vw"
          width="600"
          height="900"
          style={{ width: '100%', height: 'auto' }}
          loader={imageLoader}
        />
      </Stack>
    </>
  );
}
