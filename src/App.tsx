import { Box, Typography } from '@mui/material';
import Header from './components/Header';
import ProjectProvider from './project-provider';
import BodyContainer from './components/BodyContainer';

function App() {
  return (
    <ProjectProvider>
      <Box
        sx={{ height: '100%', width: '100%', maxWidth: '1050px', mx: 'auto' }}
      >
        <Header />
        <BodyContainer>
          <Typography variant="h2">I am a sample text!</Typography>
        </BodyContainer>
      </Box>
    </ProjectProvider>
  );
}

export default App;
