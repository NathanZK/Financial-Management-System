import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Select
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { getCategory } from "../services/categoryServices";

const Income = ({ onSave }) => {


  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Form method="post" action="/dashboard/income">
        <Stack spacing={7}>
          <Text fontSize="lg" fontWeight="bold">
            Create a new budget
          </Text>
          
          <FormControl>
            <FormLabel>Total budget</FormLabel>
            <InputGroup>
              <Input
                type="number"
                name="amount"
              />
              <InputRightElement children="Birr" />
            </InputGroup>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Add Income
          </Button>
        </Stack>
      </Form>
    </Box>
  );
};

export default Income;
