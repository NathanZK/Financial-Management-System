import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

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
        <form onSubmit={handleSubmit}>
          <FormControl id="tuitionFees" mb={4}>
            <FormLabel>Tuition Fees</FormLabel>
            <Input
              type="number"
              placeholder="Enter your tuition fees"
              value={tuitionFees}
              onChange={(e) => setTuitionFees(Number(e.target.value))}
            />
          </FormControl>
          <FormControl id="textbooks" mb={4}>
            <FormLabel>Textbooks</FormLabel>
            <Input
              type="number"
              placeholder="Enter your textbook expenses"
              value={textbooks}
              onChange={(e) => setTextbooks(Number(e.target.value))}
            />
          </FormControl>
          <FormControl id="fundraisingGoal" mb={4}>
            <FormLabel>Fundraising Goal</FormLabel>
            <Input
              type="number"
              placeholder="Enter your fundraising goal"
              value={fundraisingGoal}
              onChange={(e) => setFundraisingGoal(Number(e.target.value))}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Create Campaign
          </Button>
        </form>
      </Box>
    );
}

export default FundMe;