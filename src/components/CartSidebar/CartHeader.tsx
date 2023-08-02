import { Stack, Typography, Button } from '@mui/material';

export default function CartHeader() {
  return (
    <Stack
      direction="row"
      sx={{
        p: '24px',
        bgcolor: 'secondary.main',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" sx={{ color: 'primary.main' }}>
        My Cart
      </Typography>

      <Button variant="contained-sml-red">Clear Cart</Button>
    </Stack>
  );
}
