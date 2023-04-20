import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} alignItems='center' justifyContent='center'>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '3xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  display="inline"
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'blue.400',
                    zIndex: -1,
                  }}>
                  Don't be a student in debt! Our platform teaches you how to save money like a &nbsp;
                </Text>
        
                <Text color={'blue.400'} as={'span'} display="inline">
                 pro(fessor)!
                </Text>{' '}
              </Heading>
          
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <NavLink to='/login'>
                <Button
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Get Started
                </Button>
                </NavLink>
                <NavLink to='campaigns'>
                <Button rounded={'full'}>Donate</Button>
                </NavLink>
              </Stack>
            </Stack>
            <Image maxHeight={500}
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
            />
          </Flex>
        </Stack>
      );
};

export default LandingPage;