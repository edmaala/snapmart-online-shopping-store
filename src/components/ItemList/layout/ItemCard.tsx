import { Stack, Box, Typography, Button } from '@mui/material';
import { Item } from '../../../models/item';

export default function ItemCard({
  productName,
  description,
  unitPrice,
  category,
  imageUrl,
}: Omit<Item, 'id'>) {
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
              ₱{unitPrice.toLocaleString()}
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
        sx={{ alignSelf: 'flex-end', width: '30%' }}
      >
        Add to cart
      </Button>
    </Stack>
  );
}
