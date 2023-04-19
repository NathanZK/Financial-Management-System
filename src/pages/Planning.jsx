import { useState } from "react";
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

const Planning = ({ onSave }) => {
  const [budgetType, setBudgetType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalBudget, setTotalBudget] = useState("");

  const categories = ["Food", "Transportation", "Books"]

  
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
      <form onSubmit={handleSubmit}>
        <Stack spacing={7}>
          <Text fontSize="lg" fontWeight="bold">
            Create a new budget
          </Text>
          <FormControl>
            <FormLabel>Budget Type</FormLabel>
            <Select placeholder='Select option' onChange={(event) => setBudgetType(event.target.value)}>
                {categories && categories.map(category => (
                <option value = {budgetType}> {category}</option>
                ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Start date</FormLabel>
            <Input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>End date</FormLabel>
            <Input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Total budget</FormLabel>
            <InputGroup>
              <Input
                type="number"
                value={totalBudget}
                onChange={(event) => setTotalBudget(event.target.value)}
              />
              <InputRightElement children="Birr" />
            </InputGroup>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Create budget
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Planning;
