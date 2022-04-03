import * as React from 'react'
import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  ModalFooter,
  Spacer,
} from '@chakra-ui/react';
  
export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://c4.wallpaperflare.com/wallpaper/111/893/103/fantasy-library-hd-wallpaper-preview.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '7xl' })}>
            All In One Media
          </Text>
          <Stack direction={['row']}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/SignupForm'}>
              Sign Up
            </Button>
            <Button
              bg={'whiteAlpha.500'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'/LoginForm'}>
              Log In
            </Button>
          </Stack>
        </Stack>
  </VStack>
    </Flex>
  );
}