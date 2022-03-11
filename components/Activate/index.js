import React, {useState, useEffect} from 'react'
import {MainContainer} from './components'
import Link from 'next/link'
import { BoxFooter, BackgroundOverlay, LogoContainer } from './components'
import Image from 'next/image'
import {Media} from '../helper/media'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { 
  Box, 
  Text, 
  InputGroup, 
  Input, 
  InputRightElement, 
  Button, 
  Stack, 
  Divider,
  Flex
} from '@chakra-ui/react'


{/* <MainImgContainer>
      <NextImage
        src={brand.thumbnail_url[selectSmallImg].thumbnail_url}
        layout="fill"
        objectFit="contain"
        quality={100}
      />
    </MainImgContainer> */}



const ActivatePage = (val) => {

  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  })

  const { queryToken } = val.val;
  
  useEffect(() => {
    let {name} = jwt_decode(queryToken);
    if (queryToken) {
      setValues({ ...values, name, token: queryToken });
    }
  }, []);
  
  const { name, token, show } = values;
  
  const clickSubmit = () => {
    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_APP_API}/account-activation`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: { token }
    })
      .then(response => {
        console.log('ACCOUNT ACTIVATION', response)
        setValues({ ...values, show: false })
        toast.success(response.data.message)
      })
      .catch(error => {
        console.log('ACCOUNT ACTIVATION ERROR', error.response.data.error)
        toast.error(error.response.data.error)
      })
  }


  return (
    <MainContainer>
      {/* <BackgroundOverlay
        alt="main-bg"
        src={`/images/signin/circle_logo.png`}
        objectFit="contain"
        objectPosition="top center"
        layout="fill"
        loading="eager"
        priority={true}
        // priority={true}
      /> */}
      <ToastContainer />
      <Media greaterThanOrEqual='md'>
        <LogoContainer>
          <Image
            // loader={myLoader}
            src={`/images/signin/circle_logo1.png`}
            loading="eager"
            layout="fill"
            objectFit="contain"
            quality={100}
            onContextMenu={(e) => e.preventDefault()}
          />
        </LogoContainer>
      </Media>
      

     <Box 
      bg='rgba(255, 255, 255, .9)' 
      w='25rem' 
      minW='20rem'
      maxW='calc(100% - 30px)' 
      color='white' 
      boxShadow={'0 0.76875rem 2.4875rem rgb(52 58 64 / 30%), 0 1.3375rem 1.70625rem rgb(52 58 64 / 30%), 0 0.55rem 0.53125rem rgb(0 0 0 / 5%), 0 0.225rem 0.4375rem rgb(52 58 64 / 30%)'}
      pos='relative'
      display={'flex'}
      flexDir={'column'}
      borderRadius={'0.3rem'}
    >
      
      <Media lessThan='md'>
        
        <LogoContainer>
          <Image
            src={`/images/signin/circle_logo1.png`}
            loading="eager"
            layout="fill"
            objectFit="contain"
            quality={100}
            onContextMenu={(e) => e.preventDefault()}
          />
        </LogoContainer>
      </Media>

      <Box
        p={4}
      >
        <Text 
          fontSize='2xl' 
          color="#000"
          mb={'1.5rem'}
          mt={'.5rem'}
          w={'100%'}
          display={'flex'}
          justifyContent={'center'}
          textAlign={'center'}
          flexDirection={'column'}
        > 
          <Text
            color={'gray.500'}
          >
            Welcome to <span style={{fontWeight: 'bold'}}>
              <span style={{color: '#3694dc'}}>SKYZIAN</span>&nbsp;
                {/* <span style={{color: '#ffd31f'}}>Dashboard</span> */}
              </span>
          </Text>
          <Text
            fontSize='sm'
          >
            Good day, {name}! Please click the button below to activate your account.  
          </Text>
        </Text>


    
        <Divider 
          mt={'1rem'}
          mb={'1rem'}
        />

        <Flex>
          <Button w='100%' bg="#3694dc" _focus={'none'} _hover={{background: '#3694dc;'}} onClick={clickSubmit}>Activate now</Button>
        </Flex>
      </Box>


    </Box> 

    </MainContainer>
  )
}

export default ActivatePage