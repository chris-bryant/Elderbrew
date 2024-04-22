import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Nav() {
  return (
    <Stack direction="row" spacing={2} sx={{
      '.MuiButtonBase-root': {
        fontSize: {
          xs: '1rem',
          sm: '1.5rem',
          md: '2rem',
        }
      }
    }}>
      <Button size="large" href="/about">Our Story</Button>
      <Button size="large" href="/ontap">On Tap</Button>
      <Button size="large" href="https://elderbrew.square.site/">Merch</Button>
      <Button size="large" href="/contact">Contact</Button>
    </Stack>
  );
}
