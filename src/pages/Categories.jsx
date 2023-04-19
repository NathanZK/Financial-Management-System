import { useState } from "react";
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
  const [categories, setCategories] = useState([
    { id: 1, name: "Food" },
    { id: 2, name: "Transportation" }
  ]);
  const [name, setName] = useState("");

  const handleNewCategorySubmit = (event) => {
    event.preventDefault();
    const newName = name !== "" ? name : "newCategory";
    const newCategory = {
      id: Date.now(),
      name: newName
    };
    setCategories([...categories, newCategory]);
    setName("");
  };

  const handleCategoryEdit = (index, newName) => {
    const tempCategories = [...categories];
    tempCategories[index].name = newName;
    setCategories(tempCategories);
  };

  const handleCategoryDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      const tempCategories = [...categories];
      tempCategories.splice(index, 1);
      setCategories(tempCategories);
    }
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
            onSubmit={(value) => handleCategoryEdit(index, value)}
          >
            <Flex alignItems="center">
              <EditablePreview w="250px" mr="4" />
              <EditableInput w="100%" />
              <EditableControls />
            </Flex>
          </Editable>
          <Spacer />
          <Button size="sm" colorScheme="red" onClick={() => handleCategoryDelete(index)}>
            Delete
          </Button>
        </Flex>
      ))}
      <br />
      <Heading size="sm" mb="4">
        Add New Category
      </Heading>
      <form onSubmit={handleNewCategorySubmit}>
        <FormControl mb="4">
          <FormLabel>Name&nbsp;</FormLabel>
          <Input type="text" placeholder="newCategory" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          <AddIcon />
        </Button>
      </form>
    </Box>
  );
}

export default CategoryManager;