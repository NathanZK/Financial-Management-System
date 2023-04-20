import { useEffect, useState } from "react";
import { 
  Box, 
  TableContainer, 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td, 
  Button,
  useColorModeValue,
  Editable,
  EditablePreview,
  EditableInput,
  Grid,
  useEditableControls,
  Flex,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";

import { EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import CustomModal from "../components/Modal";
import {deletePlan, editPlan, getPlan} from '../services/planningServices'

function EditableControls() {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
    useEditableControls();

  return isEditing ? (
    <ButtonGroup  size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex>
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  );
}

function BudgetManager(props) {
  const [budgets, setBudget]= useState([])
    useEffect(()=> {
        getPlan()
        .then(res=> {
          setBudget(res.data)
        })
        .catch(e=> console.log(e.message))
    }, [])
    
const handleBudgetEdit = (cId, id, newPlan) => {
  console.log('reached')
  editPlan(cId, id, newPlan)
  .then(res=> console.log(res))
  .catch(e=> console.log(e.message))
};

const handleBudgetDelete = async (id) => {
    await deletePlan(id)
    const temp= budgets.filter(tmp => tmp.id != id)
    setBudget(temp)
  };
  const bgColor = useColorModeValue("teal", "blue.800");
  const hoverBgColor = useColorModeValue("blue.50", "blue.300");

return (
  <Box p={8}>
      <TableContainer as={Box} borderRadius="md" boxShadow="md">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th bg={bgColor} color="white" fontWeight="medium" fontSize="md" py={6} px={6}>
                Budget Type
              </Th>
              <Th bg={bgColor} color="white" fontWeight="medium" fontSize="md" py={6} px={6}>
                Start Date
              </Th>
              <Th bg={bgColor} color="white" fontWeight="medium" fontSize="md" py={6} px={6}>
                Total Budget
              </Th>
              <Th bg={bgColor} color="white" fontWeight="medium" fontSize="md" py={6} px={6}>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {budgets.map((budget) => (
              <Tr key={budget.id} _hover={{ bg: hoverBgColor }}>
                <Td>{budget.category_obj.name}</Td>
                <Td>{budget.created.slice(0, 10)}</Td>
                <Td>
                  <Editable
                    defaultValue={budget.amount}
                    fontSize="lg"
                    isPreviewFocusable={false}
                    onSubmit={(value) => handleBudgetEdit(budget.category_obj.id, budget.id, value)}
                  >
                    <Grid justifyContent="space-between" alignItems="center">
                      <EditablePreview w="250px" mr="4" />
                      <EditableInput w="100%" />
                      <EditableControls />
                    </Grid>
                  </Editable>
                </Td>
                <Td>
                <CustomModal handleCategoryDelete={handleBudgetDelete} index={budget.id}/>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
  }

export default BudgetManager;