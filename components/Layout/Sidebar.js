import React, {useState} from 'react';
import {AppSidebar, AppHeaderLogo} from './components'
import {FiMenu, FiHome, FiCalendar, FiUser} from 'react-icons/fi';
import NavItem from './NavItem';
import { 
  Flex, 
  Divider, 
  Avatar, 
  Heading, 
  Text, 
  IconButton
} from '@chakra-ui/react';



const Sidebar = () => {
  const [navSize, changeNavSize] = useState("large");


    return (
      // <>
      //   <AppSidebar>
      //     <AppHeaderLogo></AppHeaderLogo>
      //   </AppSidebar>
      // </>
      <Flex
        // background='red'
        pos='sticky'
        // left="5"
        // h="95vh"
        h="95.5vh"
        // marginTop="2.5vh"
        boxShadow="0px 4px 12px 0 rgba(0, 0, 0, 0.05)"
        borderRadius={navSize === "small" ? "15px" : "30px"}
        w={navSize === "small" ? "75px" : "200px"}
        flexDir="column"
        justifyContent="space-between"
      >
        <Flex
          p="5%"
          flexDir="column"
          alignItems={navSize === "small" ? "center" : "flex-start"}
          as="nav"
        >
          <IconButton 
            background="none"
            mt={navSize === "small" ? 5 : ""}
            _hover={{background: 'none'}}
            icon={<FiMenu />}
            onClick={() => { 
              if(navSize === 'small') 
                changeNavSize('large')
              else
                changeNavSize('small')
            }}
          />
          <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is a Dashboard description" />
          <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active description="This is a Calendar description" />
          <NavItem navSize={navSize} icon={FiUser} title="Clients" description="This is a Client description" />
        </Flex>

        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize === "small" ? "center" : "flex-start"}
          mb={4}
        >
          <Divider display={navSize === 'small' ? 'none' : 'flex'} />
          <Flex mt={4} align='center'>
            <Avatar size="sm" src="avatar-1.jpg"/>
            <Flex
              flexDir="column"
              ml={4}
              display={navSize === 'small' ? 'none' : 'flex'}
            >
              <Heading as="h3" size="sm">Bryan Lontoc</Heading>
              <Text color="gray">Admin</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
  }

export default Sidebar;