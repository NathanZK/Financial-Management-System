import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form, NavLink, redirect } from 'react-router-dom';
import { register } from './../services/userService';

function Register(props) {
    
  
    return (
      <Box py="10">
        <Box maxW="md" mx="auto" p="6" bg="white" borderRadius="lg" boxShadow="lg" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb="2">Sign up for an account</Text>
          <Form method="post" action="/register">
            <Stack spacing="4">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" name='username' />
              </FormControl>
  
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' />
              </FormControl>
  
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' />
                <FormHelperText>A minimum of 6 characters is required</FormHelperText>
              </FormControl>
  
              <Button type="submit" colorScheme="blue">Sign up</Button>
            </Stack>
          </Form>
          <NavLink to= '/login' >Already have an account</NavLink>
        </Box>
      </Box>
    );
}

export default Register;

export const registerUser= async ({request}) => {
    
    const res= await request.formData()
    const submission= {
        name: res.get('username'),
        username: res.get('username'),
        email: res.get('email'),
        password: res.get('password'),
        isStudent: true
    }
    console.log(submission)
    register(submission)
    .then(res=> {
      return redirect('/dashboard')
    })
    .catch(err=>{return null} )
    
    
  }
  