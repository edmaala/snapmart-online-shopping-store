import { ReactNode, useContext } from 'react';
import { Box } from '@mui/material';
import { ProjectContext } from '../project-provider';

export default function BodyContainer({ children }: Props) {
  const { headerHeight } = useContext(ProjectContext);

  return (
    <Box
      sx={{
        width: '100%',
        height: `calc(100% - ${headerHeight}px)`,
        bgcolor: 'primary.light',
      }}
    >
      {children}
    </Box>
  );
}

type Props = {
  children: ReactNode;
};
