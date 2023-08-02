// import { useContext } from 'react'
import { useContext } from 'react';
import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import { CartItem } from '../../../models/item';
import { ProjectContext } from '../../../project-provider';
import CloseIcon from '../CloseIcon';

export default function CartItemCard({ cartItemData }: Props) {
  const {
    productName,
    imageUrl,
    qty,
    totalPrice,
    id: cartItemId,
  } = cartItemData;
  const { setCartItems } = useContext(ProjectContext);

  const addItemQty = () => {
    setCartItems((cartItemList) => {
      const existingCartItem = cartItemList.find(({ id }) => id === cartItemId);
      if (existingCartItem) {
        existingCartItem.qty += 1;
        existingCartItem.totalPrice =
          existingCartItem.unitPrice * existingCartItem.qty;
      }

      return [...cartItemList];
    });
  };

  const subtractItemQty = () => {
    setCartItems((cartItemList) => {
      let currentCartItemList = [...cartItemList];

      const existingCartItem = currentCartItemList.find(
        ({ id }) => id === cartItemId
      );

      if (existingCartItem) {
        existingCartItem.qty -= 1;

        if (existingCartItem.qty === 0)
          currentCartItemList = cartItemList.filter(
            ({ id }) => id !== cartItemId
          );
        else
          existingCartItem.totalPrice =
            existingCartItem.unitPrice * existingCartItem.qty;
      }

      return [...currentCartItemList];
    });
  };

  const removeItem = () =>
    setCartItems((prevCartItems) => [
      ...prevCartItems.filter(({ id }) => id !== cartItemId),
    ]);

  return (
    <Stack
      direction="row"
      spacing="8px"
      sx={{ position: 'relative', width: '100%' }}
    >
      <Button
        variant="contained-sml-red"
        onClick={removeItem}
        sx={{
          minWidth: '0px',
          p: '0',
          position: 'absolute',
          top: '-0.6rem',
          height: '1.2rem',
          width: '1.2rem',
          bgcolor: 'error.main',
          borderRadius: '50%',
          textTransform: 'none',
          color: 'primary.light',
        }}
      >
        <Box component={CloseIcon} sx={{ height: '1rem', width: '1rem' }} />
      </Button>

      <Box
        sx={{
          height: '70px',
          width: '70px',
          bgcolor: 'primary.light',
          display: 'grid',
          placeContent: 'center',
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={`${productName} minified image`}
          sx={{ maxHeight: '70px', maxWidth: '70px' }}
        />
      </Box>

      <Stack spacing="8px" sx={{ width: 'calc(100% - 78px)' }}>
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          {productName}
        </Typography>

        <Stack
          direction="row"
          spacing="1rem"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography
            variant="h4"
            component="span"
            sx={{ color: 'error.main' }}
          >
            ₱
            {totalPrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>

          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <Button
              variant="text"
              onClick={subtractItemQty}
              sx={{ p: '8px', fontSize: '1.5rem', lineHeight: '1em' }}
            >
              -
            </Button>
            <TextField
              value={qty}
              disabled
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              sx={{
                alignSelf: 'flex-end',

                '& input': { p: '8px', textAlign: 'center', maxWidth: '3rem' },
              }}
            />
            <Button
              variant="text"
              onClick={addItemQty}
              sx={{ p: '8px', fontSize: '1.5rem', lineHeight: '1em' }}
            >
              +
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

type Props = {
  cartItemData: CartItem;
};
