import { Box, Stack, Text } from '@chakra-ui/react';
import { PropsWithChildren, ReactNode } from 'react';

type PageContainerProps = PropsWithChildren<{
  footer?: ReactNode;
  maxWidth?: number;
  open?: boolean;
  origin?: string;
  title: string;
}>;
export default function PageContainer({
  children,
  footer,
  maxWidth,
  open,
  origin,
  title,
}: PageContainerProps) {
  return (
    <Box
      borderRadius={'md'}
      boxShadow={'2xl'}
      background={'blackAlpha.400'}
      maxWidth={maxWidth ? maxWidth : 'auto'}
      width={open == false ? 0 : 500}
      transform={open == false ? 'scaleX(20%)' : 'scaleX(100%)'}
      opacity={open == false ? 0 : 1}
      transformOrigin={origin}
      height={600}
      display={'flex'}
      transition={'all .3s linear'}>
      <Stack flex={1}>
        <Box padding={3} paddingX={6}>
          <Stack spacing={2} alignItems={'center'} direction={'row'}>
            <Text flex={1} fontWeight={'bold'} textTransform={'uppercase'}>
              {title}
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
