import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Form, useParams } from "react-router-dom";

function Donate(props) {
  const { id }= useParams()
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      amount,
      name,
      message,
      to,
    });
  };

  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>
        Donate
      </Heading>
      <Form method="post" action={`/dashboard/campaigns`}>
        <FormControl id="amount" mb={4}>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            placeholder="Enter amount"
            name= "amount"
          />
        </FormControl>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your name"
          />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Message</FormLabel>
          <Input
            type="text"
            placeholder="Enter your message"
          />
        </FormControl>
        <FormControl display='none' id="to" mb={4}>
          <FormLabel>To</FormLabel>
          <Input
            type="text"
            name='id'
            value={id}
            placeholder="Enter who you are donating to"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Donate
        </Button>
      </Form>
    </Box>
  );
}

export default Donate;