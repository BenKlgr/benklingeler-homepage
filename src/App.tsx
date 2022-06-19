import { ChakraProvider, extendTheme, Theme } from '@chakra-ui/react';
import { useState } from 'react';
import { PageContext } from './context/PageContext';
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  const theme = extendTheme({
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
  } as Theme);

  return (
    <ChakraProvider theme={theme}>
      <PageContext.Provider value={{ currentPage, setCurrentPage }}>
        <MainPage open={currentPage == 'main'} />
        <ProjectsPage open={currentPage == 'projects'} />
        <ContactPage open={currentPage == 'contact'} />
      </PageContext.Provider>
    </ChakraProvider>
  );
}

export default App;
