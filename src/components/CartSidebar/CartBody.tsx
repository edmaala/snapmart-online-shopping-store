import { useContext } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { ProjectContext } from '../../project-provider';
import CartItemCard from './layout/CartItemCard';

export default function CartBody() {
  const { cartItems } = useContext(ProjectContext);

  return (
    <Stack
      spacing="24px"
      sx={{
        bgcolor: 'secondary.light',
        height: '100%',
        p: '24px',
        overflowY: 'auto',
      }}
    >
      {cartItems.length ? (
        cartItems.map((cartItemData) => (
          <CartItemCard
            key={`cart-item-${cartItemData.id}`}
            cartItemData={cartItemData}
          />
        ))
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            display: 'grid',
            placeContent: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: 'secondary.main' }}>
            No items found in your cart.
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
