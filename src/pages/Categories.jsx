import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spacer,
  IconButton,
  Editable,
  EditablePreview,
  EditableInput,
  ButtonGroup,
  Flex,
  useEditableControls
} from "@chakra-ui/react";
import { AddIcon, EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import CustomModal from "../components/Modal";
import { deleteCategory, editCategory, getCategory } from "../services/categoryServices";
import { Form } from 'react-router-dom';

function EditableControls() {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
    useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  );
}

function CategoryManager() {
  const [categories, setCategories] = useState([]);

  useEffect(()=> {
    console.log('something')
    getCategory()
    .then(res=> setCategories(res.data))
    .catch(e=> console.log('error here'))
    // setCategories(catagory)
  }, [])


  const handleCategoryEdit = (id, newName) => {
    editCategory(id, newName)
  };

  const handleCategoryDelete = async (id) => {
      await deleteCategory(id)
      const temp= categories.filter(tmp => tmp.id != id)
      setCategories(temp)
    };

  return (
    <Box maxW="xl" mx="auto" mt="10" p="6" borderWidth="1px" rounded="lg">
      <Heading>Category Manager</Heading>
      <br />
      {categories.map((category, index) => (
        <Flex alignItems="center" key={category.id} mb="4">
          <Editable
            defaultValue={category.name}
            fontSize="lg"
            isPreviewFocusable={false}
            onSubmit={(value) => handleCategoryEdit(category.id, value)}
          >
            <Flex alignItems="center">
              <EditablePreview w="250px" mr="4" />
              <EditableInput w="100%" />
              <EditableControls />
            </Flex>
          </Editable>
          <Spacer />
          <CustomModal handleCategoryDelete={handleCategoryDelete} index={category.id}/>
        </Flex>
      ))}
      <br />
      <Heading size="sm" mb="4">
        Add New Category
      </Heading>
      <Form method="post" action="/dashboard/categories">
        <FormControl mb="4">
          <FormLabel>Name&nbsp;</FormLabel>
          <Input name= 'name' type="text" placeholder="newCategory"/>
        </FormControl>
        <Button colorScheme="blue" type="submit">
          <AddIcon />
        </Button>
      </Form>
    </Box>
  );
}

export default CategoryManager;