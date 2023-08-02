import React, { useContext } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ProjectContext } from '../project-provider';

export default function FilterSidebar() {
  const { categoryList, categoryFilter, setCategoryFilter } =
    useContext(ProjectContext);
  const hasCategories: number = categoryList.length;

  const handleCategoryFilterChange = (
    _e: React.MouseEvent<HTMLElement>,
    newFilter: string | null
  ) => {
    setCategoryFilter((prevCategoryFilter) => newFilter ?? prevCategoryFilter);
  };

  return (
    <Box
      sx={{
        width: '200px',
        height: '100%',
        bgcolor: 'secondary.light',
        py: '24px',
        overflowY: 'auto',
      }}
    >
      <ToggleButtonGroup
        exclusive
        value={categoryFilter}
        orientation="vertical"
        onChange={handleCategoryFilterChange}
        sx={{ width: '100%' }}
      >
        <ToggleButton value="" aria-label="">
          All Items
        </ToggleButton>

        {hasCategories
          ? categoryList.sort().map((category) => (
              <ToggleButton
                key={category}
                value={category}
                aria-label={category}
              >
                {category}
              </ToggleButton>
            ))
          : null}
      </ToggleButtonGroup>
    </Box>
  );
}
