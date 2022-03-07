import React, {useState} from 'react'
import {FiSearch} from 'react-icons/fi';
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri';
import {SearchBoxContainer} from './components'
import { 
  Flex, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  InputRightElement, 
  Avatar } from '@chakra-ui/react';



const AppBar = () => {

  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const handleSearchIcon = () => {
    if(!searchIsOpen) {
      setSearchIsOpen(true);
    }
  }

  const handleSearchClose = () => {
    setSearchIsOpen(false);
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
        <SearchBoxContainer
          searchIsOpen={searchIsOpen}
          onClick={() => handleSearchIcon()}
        >
          <InputGroup>
            <Input 
              placeholder='search' 
              border="none" 
              borderRadius="30px" 
              w={searchIsOpen? '290px' : '0'} 
              transition= 'all 0.5s cubic-bezier(0, 0.105, 0.035, 1.2)'
            />
              <InputLeftElement
                pointerEvents='none'
                children={<FiSearch />}
                background='rgba(0, 0, 0, 0.05)'
                borderRadius='100%'
                cursor='pointer'
              />
              <InputRightElement 
                children={searchIsOpen ? 
                  <RiArrowLeftSLine 
                    background={`rgba(0, 0, 0, 0.06)`} 
                    cursor='pointer'
                  /> : 
                  <RiArrowRightSLine 
                    background={`rgba(0, 0, 0, 0.06)`} 
                    cursor='pointer'
                  />
                } 
                display='flex'  
                onClick={() => handleSearchClose()}
              />
            </InputGroup>
          </SearchBoxContainer>

          <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' w='40px' h='40px' />
      </Flex>
  )
}

export default AppBar