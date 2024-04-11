import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Nav() {
  return (
    <Stack direction="row" spacing={2} sx={{
      '.MuiButtonBase-root': {
        fontSize: {
          xs: '1.5rem',
          sm: '2rem',
        }
      }
    }}>
      <Button size="large" href="/about">Our Story</Button>
      <Button size="large" href="/ontap">On Tap</Button>
      <Button size="large" href="/contact">Contact</Button>
    </Stack>
  );
}
