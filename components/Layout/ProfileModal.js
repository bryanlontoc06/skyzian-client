import SearchnAvatar from './SearchnAvatar';
import {
  Modal,
  ModalOverlay, 
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react'



const ProfileModal = ({openProfileModal, handleProfileModal, searchIsOpen, FiSearch, handleSearchIcon, handleSearchClose }) => {
  return (
    <Modal isOpen={openProfileModal} 
      onClose={() => handleProfileModal()}
    >
      <ModalOverlay />
      <ModalContent ml={2} mr={2} style={{borderRadius: '30px'}}>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        {/* <ModalCloseButton /> */}
        <ModalBody p={2}>
          <SearchnAvatar 
            searchIsOpen={searchIsOpen} 
            FiSearch={FiSearch} 
            handleSearchIcon={handleSearchIcon}  
            handleSearchClose={handleSearchClose}  
          />
        </ModalBody>

        {/* <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => handleProfileModal()} >
            Close
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  )
}

export default ProfileModal