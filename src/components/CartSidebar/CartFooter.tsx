import { useContext, useState } from 'react';
import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { ProjectContext } from '../../project-provider';

export default function CartFooter() {
  const { cartItems, resetCart } = useContext(ProjectContext);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const toggleSuccessDialogDisplay = () =>
    setShowSuccessDialog((prevStatus) => !prevStatus);

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
            ₱
            {totalAmount
              ? totalAmount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : '0.00'}
          </Typography>
        </Stack>
      </Stack>

      <Button
        variant="contained"
        disabled={!totalItems}
        onClick={() => {
          toggleSuccessDialogDisplay();
          resetCart();
        }}
      >
        Checkout
      </Button>

      <Dialog open={showSuccessDialog} onClose={toggleSuccessDialogDisplay}>
        <DialogTitle variant="h2">Thank you for purchasing with us</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Your order is now being processed, and will arrive after some time.
            We ask your kind understanding and patience.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={toggleSuccessDialogDisplay}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
