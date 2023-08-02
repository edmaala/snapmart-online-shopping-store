import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ProjectContext } from '../project-provider';

export default function Header() {
  const { setHeaderHeight } = useContext(ProjectContext);

  return (
    <Box
      ref={(headerRef: HTMLDivElement | null) =>
        setHeaderHeight(
          (prevHeaderHeight) => headerRef?.offsetHeight ?? prevHeaderHeight
        )
      }
      sx={{ p: '24px', bgcolor: 'secondary.dark' }}
    >
      <Typography variant="h1" sx={{ color: 'primary.light' }}>
        Online Shopping Store
      </Typography>
    </Box>
  );
}
