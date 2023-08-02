import { ReactNode, useContext } from 'react';
import { Stack } from '@mui/material';
import { ProjectContext } from '../project-provider';

export default function BodyContainer({ children }: Props) {
  const { headerHeight } = useContext(ProjectContext);

  return (
    <Stack
      direction="row"
      sx={{
        width: '100%',
        height: `calc(100% - ${headerHeight}px)`,
        bgcolor: 'primary.light',
      }}
    >
      {children}
    </Stack>
  );
}

type Props = {
  children: ReactNode;
};
