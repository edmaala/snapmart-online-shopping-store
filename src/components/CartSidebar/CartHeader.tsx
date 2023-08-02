import { useContext } from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { ProjectContext } from '../../project-provider';

export default function CartHeader() {
  const { setCartItems } = useContext(ProjectContext);

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

      <Button variant="contained-sml-red" onClick={() => setCartItems([])}>
        Clear Cart
      </Button>
    </Stack>
  );
}
