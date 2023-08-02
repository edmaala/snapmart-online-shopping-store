import { useContext, useState, useMemo } from 'react';
import { TextField, Stack } from '@mui/material';
import { ProjectContext } from '../../project-provider';
import ItemCard from './layout/ItemCard';
import ToggleSort from './ToggleSort';
import { SORT_METHODS } from '../../constants';
import { SortMethod } from '../../models/sort-method';

export default function ItemList() {
  const { itemList, categoryFilter } = useContext(ProjectContext);
  const [sortMethod, setSortMethod] = useState<SortMethod>(SORT_METHODS.asc);
  const [searchValue, setSearchValue] = useState<string>('');

  const toggleSortMethod = () =>
    setSortMethod((prevSortMethod) =>
      prevSortMethod === SORT_METHODS.asc ? SORT_METHODS.desc : SORT_METHODS.asc
    );

  const sortedAndFilteredItemList = useMemo(
    () =>
      itemList
        .sort(
          ({ unitPrice: unitPriceCurrent }, { unitPrice: unitPriceNext }) =>
            sortMethod === SORT_METHODS.asc
              ? unitPriceCurrent - unitPriceNext
              : unitPriceNext - unitPriceCurrent
        )
        .filter(({ category }) =>
          categoryFilter ? category === categoryFilter : category
        ),
    [itemList, sortMethod, categoryFilter]
  );

  return (
    <Stack
      spacing="12px"
      sx={{
        bgcolor: 'primary.light',
        p: '24px',
        width: 'calc(100% - 600px)',
        height: '100%',
      }}
    >
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        id="item-search-bar"
        label="Search Item"
        variant="outlined"
        fullWidth
      />

      <ToggleSort sortMethod={sortMethod} toggleSortMethod={toggleSortMethod} />

      <Stack spacing="24px" sx={{ height: '100%', overflowY: 'auto' }}>
        {sortedAndFilteredItemList
          .filter(
            ({ productName, category }) =>
              productName.includes(searchValue) ||
              category.includes(searchValue)
          )
          .map((itemData) => (
            <ItemCard key={`item-${itemData.id}`} itemData={itemData} />
          ))}
      </Stack>
    </Stack>
  );
}
