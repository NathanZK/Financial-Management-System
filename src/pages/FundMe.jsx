import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

function FundMe() {
    const [tuitionFees, setTuitionFees] = useState("");
    const [textbooks, setTextbooks] = useState("");
    const [fundraisingGoal, setFundraisingGoal] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({
        tuitionFees,
        textbooks,
        fundraisingGoal,
      });
    };
  
    return (
      <Box>
        <Heading as="h2" size="md" mb={4}>
          Create a Fundraising Campaign
        </Heading>
        <Form method="post" action="/dashboard/fundme">
          <FormControl id="tuitionFees" mb={4}>
            <FormLabel> Enter goal</FormLabel>
            <Input
              type="number"
              placeholder="Enter your enter goal "
              name= 'amount'
            />
          </FormControl>
          <FormControl id="fundraisingGoal" mb={4}>
            <FormLabel>Fundraising Goal</FormLabel>
            <Input
              type="text"
              placeholder="Enter reason"
              name="reason"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Create Campaign
          </Button>
        </Form>
      </Box>
    );
}

export default FundMe;