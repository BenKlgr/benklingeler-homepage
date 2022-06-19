import {
  Box,
  Button,
  IconButton,
  Image,
  Link,
  Stack,
  StackDivider,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useContext } from 'react';
import PageContainer from '../components/PageContainer';
import { Icon } from '@iconify/react';
import Avatar from '../components/avatar/Avatar';
import { PageStateContext } from '../context/PageStateContext';

export default function MainPage() {
  const { projects, contact, setContact, setProjects } = useContext(PageStateContext);

  return (
    <PageContainer maxWidth={500} title={'About me'}>
      <Stack alignItems={'center'} paddingX={6} spacing={2}>
        <Avatar />
        <StackDivider />
        <Text fontSize={'2xl'}>Ben Klingeler</Text>
        <Text>Software Developer</Text>
        <StackDivider />
        <Stack direction={'row'} width={'100%'}>
          <Text>
            <Icon icon={'bi:quote'} />
          </Text>
          <Text flex={1}>
            As a dual student for business informatics, I am particularly interested in
            the development and improvement of programming projects.
          </Text>
        </Stack>
        <StackDivider />
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={4}>
          <Link href={'https://github.com'} target={'_blank'}>
            <Tooltip label={'Github'}>
              <IconButton aria-label={'github'}>
                <Icon icon={'simple-icons:github'} />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href={'https://linkedin.com'} target={'_blank'}>
            <Tooltip label={'LinkedIn'}>
              <IconButton aria-label={'linkedin'}>
                <Icon icon={'simple-icons:linkedin'} />
              </IconButton>
            </Tooltip>
          </Link>
          <Link href={'https://linkedin.com'} target={'_blank'}>
            <Tooltip label={'E-Mail'}>
              <IconButton aria-label={'mail'}>
                <Icon icon={'simple-icons:maildotru'} />
              </IconButton>
            </Tooltip>
          </Link>
        </Stack>
        <Box padding={6} paddingX={6}>
          <Stack direction={'row'} spacing={4} justifyContent={'center'}>
            <Box>
              <Button variant={'ghost'} onClick={() => setContact(!contact)}>
                <Stack spacing={2} alignItems={'center'} direction={'row'}>
                  <Icon icon={'bi:arrow-left'} />
                  <Text>Contact</Text>
                </Stack>
              </Button>
            </Box>
            <Button variant={'ghost'} onClick={() => setProjects(!projects)}>
              <Stack spacing={2} alignItems={'center'} direction={'row'}>
                <Text>Projects</Text>
                <Icon icon={'bi:arrow-right'} />
              </Stack>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </PageContainer>
  );
}
