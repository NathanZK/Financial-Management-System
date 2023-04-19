import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';

const LandingPage = () => {
    return (
        <Flex
            h= '90vh'
            w= '100vw'
            justifyContent= 'space-around'
            alignItems='center'
        >
            <Box>
                <Heading>
                    Here we go
                </Heading>
            </Box>
            <Box>
                <Image 
                    src= "https://images.unsplash.com/photo-1660139099083-03e0777ac6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80"
                    w= '42em'
                />
            </Box>
        </Flex>
    );
};

export default LandingPage;