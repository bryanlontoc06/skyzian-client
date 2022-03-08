import React, {useState, useEffect} from 'react';
import {FiMenu, FiHome, FiCalendar, FiUser} from 'react-icons/fi';
import NavItem from './NavItem';
import useHooks from './hooks';
import { 
  Flex, 
  Divider, 
  Avatar, 
  Heading, 
  Text, 
  IconButton
} from '@chakra-ui/react';



const Sidebar = ({navSize, changeNavSize}) => {
  const {isLargerThan1200, isLargerThan992} = useHooks();

  useEffect(() => {
    if(isLargerThan1200) {
      changeNavSize("large");
    } else {
      changeNavSize("small");
    }
  }, [isLargerThan1200])
  
  
    return (
      <Flex
        // background='red'
        pos='sticky'
        // left="5"
        // h="95vh"
        h={isLargerThan992 ? "calc(100vh - 35px)" : "calc(100vh - 95px)"}
        // marginTop="2.5vh"
        boxShadow="0px 4px 12px 0 rgba(0, 0, 0, 0.05)"
        borderRadius={navSize === "small" ? (isLargerThan992 ? "15px 0 15px 15px" : "0px 0 15px 15px") : (isLargerThan992 ? "30px 0 30px 30px" : "0px 0 30px 30px")}
        w={navSize === "small" ? (isLargerThan992 ? "75px" : "0") : "280px"}
        flexDir="column"
        justifyContent="space-between"
        style={{ transition: `all .3s ease`}}
        onMouseOver={() => changeNavSize("large")}
        onMouseOut={() => changeNavSize("small")}
      >
        <Flex
          p="5%"
          flexDir="column"
          alignItems={navSize === "small" ? "center" : "flex-start"}
          style={{ transition: `all .3s ease`}}
          as="nav"
        >
          {/* <IconButton 
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
          /> */}
          <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is a Dashboard description" isLargerThan992={isLargerThan992} />
          <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active description="This is a Calendar description" isLargerThan992={isLargerThan992} />
          <NavItem navSize={navSize} icon={FiUser} title="Clients" description="This is a Client description" isLargerThan992={isLargerThan992} />
        </Flex>



        {/* <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize === "small" ? "center" : "flex-start"}
          mb={4}
        >
          <Divider display={navSize === 'small' ? 'none' : 'flex'} />
          <Flex mt={4} align='center'>
            <Avatar size="sm" src="avatar-1.jpg" display={navSize === "small" ? (!isLargerThan992 && 'none') : 'block'} />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize === 'small' ? 'none' : 'flex'}
            >
              <Heading as="h3" size="sm">Bryan Lontoc</Heading>
              <Text color="gray">Admin</Text>
            </Flex>
          </Flex>
        </Flex> */}
      </Flex>
    )
  }

export default Sidebar;