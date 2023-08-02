import { useContext } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { ProjectContext } from '../../project-provider';

export default function CartFooter() {
  const { cartItems } = useContext(ProjectContext);

  const { totalAmount, totalItems } = cartItems.reduce(
    (accumulator: { totalItems: number; totalAmount: number }, currentItem) => {
      const accumulatedTotalData = { ...accumulator };

      accumulatedTotalData.totalItems += currentItem.qty;
      accumulatedTotalData.totalAmount += currentItem.totalPrice;

      return accumulatedTotalData;
    },
    { totalItems: 0, totalAmount: 0 }
  );

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
            {totalItems}
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
            component="span"
            sx={{ color: 'error.main', textAlign: 'right' }}
          >
            ₱{totalAmount ? totalAmount.toLocaleString() : '0.00'}
          </Typography>
        </Stack>
      </Stack>

      <Button variant="contained">Checkout</Button>
    </Stack>
  );
}
