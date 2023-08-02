import { useContext } from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';
import { Item } from '../../../models/item';
import { ProjectContext } from '../../../project-provider';

export default function ItemCard({ itemData }: Props) {
  const {
    productName,
    description,
    unitPrice,
    category,
    imageUrl,
    id: itemId,
  } = itemData;

  const { setCartItems } = useContext(ProjectContext);

  const addToCartAction = () => {
    setCartItems((prevCartItems) => {
      const existingCartItemIndex = prevCartItems.findIndex(
        ({ id }) => id === itemId
      );

      if (existingCartItemIndex !== -1) {
        const existingCartItem = prevCartItems[existingCartItemIndex];

        existingCartItem.qty += 1;
        existingCartItem.totalPrice =
          existingCartItem.qty * existingCartItem.unitPrice;

        prevCartItems.splice(existingCartItemIndex, 1);
        prevCartItems.unshift(existingCartItem);
      } else {
        prevCartItems.unshift({ ...itemData, qty: 1, totalPrice: unitPrice });
      }

      return [...prevCartItems];
    });
  };

  return (
    //* Card container
    <Stack
      spacing="32px"
      sx={{
        p: '24px',
        bgcolor: 'secondary.light',
        borderRadius: '12px',
      }}
    >
      <Stack direction="row" spacing="24px">
        {/* //* Image */}
        <Box
          sx={{
            height: '120px',
            width: '120px',
            display: 'grid',
            placeContent: 'center',
            bgcolor: 'primary.light',
          }}
        >
          <Box
            component="img"
            src={imageUrl}
            alt={`${productName} image`}
            sx={{ maxHeight: '120px', maxWidth: '120px' }}
          />
        </Box>

        {/* //* Product Details */}
        <Stack spacing="8px" sx={{ width: 'calc(100% - 144px)' }}>
          {/* //* Product name and price */}
          <Stack
            direction="row"
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Typography variant="h4" sx={{ color: 'primary.main' }}>
              {productName}
            </Typography>

            <Typography
              variant="h3"
              sx={{ color: 'error.main', textAlign: 'right' }}
            >
              ₱
              {unitPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
          </Stack>

          <Typography
            variant="subtitle1"
            sx={{ color: 'success.dark', textTransform: 'capitalize' }}
          >
            {category}
          </Typography>

          <Typography variant="body1" sx={{ color: 'secondary.main' }}>
            {description}
          </Typography>
        </Stack>
      </Stack>

      <Button
        variant="contained-sml"
        onClick={addToCartAction}
        sx={{ alignSelf: 'flex-end', width: '30%' }}
      >
        Add to cart
      </Button>
    </Stack>
  );
}

type Props = {
  itemData: Item;
};
