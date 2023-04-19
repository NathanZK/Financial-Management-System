import { Flex, Box, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";

const Navbar = () => {
    return (  
        <Flex as="nav" p="10px" alignItems="center"> 
            <Heading as="h1">My Finances</Heading>
            <Spacer />

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">M</Box>
                <Text>nathan@awesome.dev</Text>
                <Button colorScheme="blue">Logout</Button>
            </HStack>
        </Flex>
    );
}
 
export default Navbar;