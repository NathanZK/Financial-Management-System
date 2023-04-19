import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";

const LoginPage = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your authentication logic
    // Show success message with toast
    toast({
      title: "Logged in",
      description: "Welcome back!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box py="10">
      <Box maxW="md" mx="auto" p="6" bg="white" borderRadius="lg" boxShadow="lg" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" mb="2">Log in to your account</Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <FormHelperText>A minimum of 6 characters is required</FormHelperText>
            </FormControl>

            <Button type="submit" colorScheme="blue">Log in</Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
