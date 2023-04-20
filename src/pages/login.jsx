import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { Form, NavLink, redirect } from "react-router-dom";
import { auth } from "../services/authService";

const LoginPage = () => {
 
  return (
    <Box py="10">
      <Box maxW="md" mx="auto" p="6" bg="white" borderRadius="lg" boxShadow="lg" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" mb="2">Log in to your account</Text>
        <Form method="post" action="/login">
          <Stack spacing="4">
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input name= 'email' type="text" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input name= "password" type="password" />
              <FormHelperText>A minimum of 6 characters is required</FormHelperText>
            </FormControl>

            <Button type="submit" colorScheme="blue">Log in</Button>
          </Stack>
        </Form>
        <NavLink to='/register'>
          <Text>create new account</Text>
        </NavLink>
      </Box>
    </Box>
  );
};

export const saveUser= async ({request}) => {
  const res= await request.formData()
  const submission= {
    email: res.get('email'),
    password: res.get('password')
  }
  
  auth(submission.email, submission.password)
  .then(res=> {
    window.location='/dashboard'
  })
  .catch(e=> console.log(e))
  return null
}

export default LoginPage;
