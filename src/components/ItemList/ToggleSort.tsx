import { Stack, Typography, Button } from '@mui/material';
import { SortMethod } from '../../models/sort-method';
import { SORT_METHODS } from '../../constants';

export default function ToggleSort({ toggleSortMethod, sortMethod }: Props) {
  return (
    <Stack
      direction="row"
      sx={{ alignItems: 'center', justifyContent: 'flex-end' }}
    >
      <Typography variant="subtitle1" sx={{ color: 'primary.black' }}>
        Sort price
      </Typography>
      <Button
        variant="text"
        onClick={toggleSortMethod}
        sx={{ display: 'inline' }}
      >
        {sortMethod === SORT_METHODS.asc ? 'High to low' : 'Low to high'}
      </Button>
    </Stack>
  );
}

type Props = {
  toggleSortMethod: () => void;
  sortMethod: SortMethod;
};
