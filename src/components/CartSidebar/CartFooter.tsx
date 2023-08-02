import { Stack, Typography, Button } from '@mui/material';

export default function CartFooter() {
  return (
    <Stack
      spacing="24px"
      sx={{ p: '24px', bgcolor: 'secondary.main', width: '100%' }}
    >
      <Stack>
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Typography variant="body1" sx={{ color: 'primary.main' }}>
            Total Items:
          </Typography>
          <Typography
            variant="body1-bold"
            sx={{ color: 'error.main', textAlign: 'right' }}
          >
            12
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Typography variant="body1" sx={{ color: 'primary.main' }}>
            Total Amount:
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: 'error.main', textAlign: 'right' }}
          >
            ₱320.50
          </Typography>
        </Stack>
      </Stack>

      <Button variant="contained">Checkout</Button>
    </Stack>
  );
}
