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

const Planning = ({ onSave }) => {

  const [categories, setCategories] = useState([])
  useEffect(()=> {
    getCategory()
    .then(res=> setCategories(res.data))
    .catch(err=> console.log('e'))
  }, [])


  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({
      budgetName,
      startDate,
      endDate,
      totalBudget: parseInt(totalBudget),
      expenses: [],
      income: [],
    });
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Form method="post" action="/dashboard/planning">
        <Stack spacing={7}>
          <Text fontSize="lg" fontWeight="bold">
            Create a new budget
          </Text>
          <FormControl>
            <FormLabel>Budget Type</FormLabel>
            <Select placeholder='Select option' name= 'name'>
                {categories && categories.map(category => (
                <option key={category.id} value = {category.id}> {category.name}</option>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Start date</FormLabel>
            <Input
              type="date"
            />
          </FormControl>
          <FormControl>
            <FormLabel>End date</FormLabel>
            <Input
              type="date"
            />
          </FormControl>
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
            Create budget
          </Button>
        </Stack>
      </Form>
    </Box>
  );
};

export default Planning;
