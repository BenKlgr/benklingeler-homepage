import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type PageLayoutProps = {
  sxProps: any;
  children: ReactNode;
};
export default function PageLayout({ sxProps, children }: PageLayoutProps) {
  return (
    <Box
      width={'100%'}
      height={'100vh'}
      display={'flex'}
      position={'fixed'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={sxProps}
      transition={'left 0.6s ease, top .6s ease, opacity .6s ease'}>
      {children}
    </Box>
  );
}
