import React from 'react'
import NavHoverBox from './NavHoverBox'
import {
    Flex, 
    Menu, 
    Link, 
    MenuButton, 
    Icon, 
    Text,
    MenuList,
    Tooltip,
    Button
} from '@chakra-ui/react'

const NavItem = ({navSize, title, icon, active, description}) => {



  return (
    <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    >
        <Menu placement="right" >
            <Tooltip label={description} placement='right'>
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{textDecoration: 'none', backgroundColor: '#AEC8CA'}}
                    w={(navSize === 'large') && '100%'}
                    onMouseOver={() => { console.log('hover') }}
                    onMouseLeave={() => { console.log('hoverOut') }}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active? "#82AAAD" : "gray.500"} />
                            <Text ml={5} display={navSize == 'small' ? 'none' : 'flex'}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Tooltip>
            {/* <MenuList
                py={0}
                border="none"
                w={200}
                h={200}
                ml={5}
            >
                <NavHoverBox title={title} icon={icon} description={description} />
            </MenuList> */}
               
        </Menu>
    </Flex>
  )
}

export default NavItem