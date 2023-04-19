import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
    Button,

} from '@chakra-ui/react'

function CustomModal({index, handleCategoryDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDelete = () =>{
      handleCategoryDelete(index)
      onClose()
    }
    return (
      <>
        <Button bg="red" color="white" onClick={onOpen}>Delete</Button>
      
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure you want to delete category?</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleDelete}>
                Yes
              </Button>
              <Button variant='ghost'>No</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default CustomModal;