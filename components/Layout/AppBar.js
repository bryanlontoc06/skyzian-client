import React, {useState} from 'react'
import {FiSearch, FiMenu} from 'react-icons/fi';
import SearchnAvatar from './SearchnAvatar';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {Media} from '../helper/media'
import ProfileModal from './ProfileModal';
import { 
  Flex, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  InputRightElement, 
  Avatar,
  IconButton
} from '@chakra-ui/react';
import { 
  IconButtonContainer, 
  AppBarSearchnAvatarContainer
} from './components'



const AppBar = ({navSize, changeNavSize}) => {

  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [openProfileModal, isOpenProfileModal] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSearchIcon = () => {
    if(!searchIsOpen) {
      setSearchIsOpen(true);
    }
  }

  const handleSearchClose = () => {
    setSearchIsOpen(false);
  }

  const handleProfileModal = () => {
    if(openProfileModal) {
      isOpenProfileModal(false);
    } else {
      isOpenProfileModal(true);
    }
  }

  return (
    <Flex
        // pos='fixed'
        zIndex={10}
        p={3}
        w='100%'
        h={`60px`}
        boxShadow="0px 4px 12px 0 rgba(0, 0, 0, 0.05)"
        flexDir="row"
        justifyContent="space-between"
        alignItems= 'center'
        style={{ transition: `all .3s ease`}}
      >
        <IconButtonContainer>
          <IconButton 
            background="none"
            // mt={navSize === "small" ? 5 : ""}
            _hover={{background: 'none'}}
            icon={<FiMenu />}
            onClick={() => { 
              if(navSize === 'small') 
                changeNavSize('large')
              else
                changeNavSize('small')
            }}
          />
        </IconButtonContainer>
        
        <AppBarSearchnAvatarContainer>
          <SearchnAvatar 
            searchIsOpen={searchIsOpen} 
            FiSearch={FiSearch} 
            handleSearchIcon={handleSearchIcon}  
            handleSearchClose={handleSearchClose}  
          />
        </AppBarSearchnAvatarContainer>


        <Media lessThan="md">
          <IconButton 
            background="none"
            // mt={navSize === "small" ? 5 : ""}
            _hover={{background: 'none'}}
            icon={<BsThreeDotsVertical />}
            onClick={() => handleProfileModal()}
          />
        </Media>

        <ProfileModal 
          openProfileModal={openProfileModal} 
          handleProfileModal={handleProfileModal} 
          searchIsOpen={searchIsOpen} 
          FiSearch={FiSearch} 
          handleSearchIcon={handleSearchIcon}  
          handleSearchClose={handleSearchClose}  
        />
      </Flex>
  )
}

export default AppBar