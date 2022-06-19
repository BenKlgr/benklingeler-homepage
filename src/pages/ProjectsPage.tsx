import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import PageContainer from '../components/PageContainer';
import PageLayout from '../components/PageLayout';
import { PageContext } from '../context/PageContext';

type ProjectsPageProps = {
  open: boolean;
};
export default function ProjectsPage({ open }: ProjectsPageProps) {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  return (
    <PageLayout
      sxProps={
        open
          ? { left: '0%', top: '0%', opacity: 1 }
          : { left: '100%', top: '0%', opacity: 0 }
      }>
      <PageContainer>
        Projects {open ? 'Open' : 'closed'}
        <Button onClick={() => setCurrentPage('contact')}>Contact</Button>
      </PageContainer>
    </PageLayout>
  );
}
