import { Box, Stack, Text } from '@chakra-ui/react';
import { PropsWithChildren, ReactNode } from 'react';

type PageContainerProps = PropsWithChildren<{ footer?: ReactNode; maxWidth?: number }>;
export default function PageContainer({
  children,
  footer,
  maxWidth,
}: PageContainerProps) {
  return (
    <Box
      borderRadius={'md'}
      boxShadow={'2xl'}
      background={'blackAlpha.400'}
      maxWidth={maxWidth ? maxWidth : 'auto'}
      minWidth={500}
      minHeight={300}
      display={'flex'}>
      <Stack flex={1}>
        <Box padding={3} paddingX={6}>
          <Stack spacing={2} alignItems={'center'} direction={'row'}>
            <Text flex={1} fontWeight={'bold'}>
              Ben Klingeler
            </Text>
            <Box width={3} height={3} background={'lime'} rounded={'full'} />
            <Box width={3} height={3} background={'yellow'} rounded={'full'} />
            <Box width={3} height={3} background={'red'} rounded={'full'} />
          </Stack>
        </Box>
        <Box padding={3} paddingX={6} flex={1}>
          {children}
        </Box>
        {footer && (
          <Box padding={6} paddingX={6}>
            <Stack direction={'row'} spacing={4} justifyContent={'center'}>
              {footer}
            </Stack>
          </Box>
        )}
      </Stack>
    </Box>
  );
}
