import React from 'react'
import {RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri';
import {SearchBoxContainer, SearchnAvatarContainer} from './components'
import { 
    Flex, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    InputRightElement, 
    Avatar,
    IconButton
  } from '@chakra-ui/react';


const SearchnAvatar = ({searchIsOpen, FiSearch, handleSearchIcon, handleSearchClose}) => {
  return (
    <SearchnAvatarContainer>
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
    </SearchnAvatarContainer>
  )
}

export default SearchnAvatar