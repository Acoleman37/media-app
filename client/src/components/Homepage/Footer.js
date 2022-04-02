import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

    export default function SmallWithNavigation() {
      return (
        <div style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
        }} ><Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={1}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'right' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2022 AIM. All rights reserved</Text>
          </Container>
        </Box>
        </div>
      );
    }