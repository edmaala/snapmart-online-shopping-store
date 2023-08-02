import { Box } from '@mui/material';
import Header from './components/Header';
import ProjectProvider from './project-provider';
import BodyContainer from './components/BodyContainer';
import FilterSidebar from './components/FilterSidebar';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <ProjectProvider>
      <Box
        sx={{ height: '100%', width: '100%', maxWidth: '1050px', mx: 'auto' }}
      >
        <Header />
        <BodyContainer>
          <FilterSidebar />
          <Box sx={{ width: 'calc(100% - 500px)' }} />
          <CartSidebar />
        </BodyContainer>
      </Box>
    </ProjectProvider>
  );
}

export default App;
