import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import PageContainer from '../components/PageContainer';
import { PageStateContext } from '../context/PageStateContext';

export default function ProjectsPage() {
  const { projects } = useContext(PageStateContext);

  return (
    <PageContainer open={projects} origin={'left'} title={'Projects'}>
      Projects
      <Button>Contact</Button>
    </PageContainer>
  );
}
