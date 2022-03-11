import React, {useState} from 'react'
import {MainContainer} from './components'
import Link from 'next/link'
import { BoxFooter, BackgroundOverlay, LogoContainer } from './components'
import Image from 'next/image'
import {Media} from '../helper/media'
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



const SigninPage = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

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
            fontSize='md'
          >
            Please sign in to your account below.  
          </Text>
        </Text>


        <Stack spacing={5}>
          <div>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={'email'}
                placeholder='Enter email'
                color='#000'
              />
            </InputGroup>
            <Text fontSize='xs' color={'gray.500'}>We'll never share your email with anyone else.</Text>
          </div>

          <div>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                color='#000'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' _focus={'none'} color={'#000'} onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
        </Stack>

        <Divider 
          mt={'1rem'}
          mb={'1rem'}
        />

        <Flex>
          <Text color={'#000'} display='flex'>No account?&nbsp;</Text>
          <Text color={'gray.500'} fontStyle='italic'><Link href="/signup">Sign up now</Link></Text>
        </Flex>
      </Box>

      <Divider />

      <BoxFooter>
        <Button colorScheme='transparent' color='#000'  fontSize='sm' _focus={'none'}>Reset your Password</Button>
        <Button bg="#3694dc" _focus={'none'} _hover={{background: '#3694dc;'}}>Login</Button>
      </BoxFooter>
    </Box> 

    </MainContainer>
  )
}

export default SigninPage