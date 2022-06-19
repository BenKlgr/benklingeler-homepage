import { Box, Image } from '@chakra-ui/react';
//@ts-ignore
import mySelfVector from '../../images/mySelfVector.png';
import './avatarAnimation.css';

export default function Avatar() {
  return (
    <Box position={'relative'}>
      <Image
        src={mySelfVector}
        width={160}
        height={160}
        position={'relative'}
        zIndex={100}
      />
      <Box
        background={'lightblue'}
        width={160}
        height={160}
        position={'absolute'}
        left={0}
        top={0}
        rounded={'full'}
        animation={'rippleEffect 2s ease infinite'}
      />
    </Box>
  );
}
