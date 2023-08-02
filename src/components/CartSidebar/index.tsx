import { Stack } from '@mui/material';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartBody from './CartBody';

export default function CartSidebar() {
  return (
    <Stack sx={{ width: '300px', height: '100%' }}>
      <CartHeader />
      <CartBody />
      <CartFooter />
    </Stack>
  );
}
