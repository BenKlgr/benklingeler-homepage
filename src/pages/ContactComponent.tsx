import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import PageContainer from '../components/PageContainer';
import { PageStateContext } from '../context/PageStateContext';

export default function ContactPage() {
  const { contact } = useContext(PageStateContext);

  return (
    <PageContainer
      open={contact}
      origin={'right'}
      title={'Contact'}
      footer={
        <>
          <Button
            colorScheme={'blue'}
            rightIcon={<Icon icon={'carbon:send-alt-filled'} />}>
            Send
          </Button>
        </>
      }>
      <Stack spacing={4}>
        <Button leftIcon={<Icon icon={'simple-icons:maildotru'} />}>
          Message me via E-Mail
        </Button>
        <Button leftIcon={<Icon icon={'simple-icons:linkedin'} />}>
          Message me on LinkedIn
        </Button>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'relative'}>
          <Text paddingX={4} background={'#141821'} position={'relative'} zIndex={10}>
            or
          </Text>
          <Box
            width={'100%'}
            height={0.5}
            background={'whiteAlpha.300'}
            position={'absolute'}
            left={0}
            top={'50%'}
          />
        </Box>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents={'none'}
              color={'whiteAlpha.400'}
              children={<Icon icon={'fa-solid:user'} />}
            />
            <Input type={'text'} placeholder={'Your name'} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents={'none'}
              color={'whiteAlpha.400'}
              children={<Icon icon={'simple-icons:maildotru'} />}
            />
            <Input type={'email'} placeholder={'Your email'} />
          </InputGroup>
          <InputGroup>
            <Textarea maxHeight={'250px'} placeholder={'Leave me a message...'} />
          </InputGroup>
        </Stack>
      </Stack>
    </PageContainer>
  );
}
