import { ChakraProvider, extendTheme, Stack, Theme } from '@chakra-ui/react';
import { useState } from 'react';
import { PageStateContext } from './context/PageStateContext';
import ContactComponent from './pages/ContactComponent';
import MainComponent from './pages/MainComponent';
import ProjectsComponent from './pages/ProjectsComponent';

function App() {
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

  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

  const setProjectsState = (newState: boolean) => {
    setProjects(newState);
    if (contact && newState) setContact(false);
  };

  const setContactState = (newState: boolean) => {
    setContact(newState);
    if (projects && newState) setProjects(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <PageStateContext.Provider
        value={{
          contact,
          setContact: setContactState,
          projects,
          setProjects: setProjectsState,
        }}>
        <Stack
          direction={'row'}
          height={'100vh'}
          width={'100%'}
          spacing={6}
          alignItems={'center'}
          justifyContent={'center'}>
          <ContactComponent />
          <MainComponent />
          <ProjectsComponent />
        </Stack>
      </PageStateContext.Provider>
    </ChakraProvider>
  );
}

export default App;
