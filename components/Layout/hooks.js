import React, {useState} from 'react'
import { useMediaQuery } from '@chakra-ui/react'


const useHooks = () => {
  
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)')
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')

  const [navSize, changeNavSize] = useState("large");

  return {
    isLargerThan992,
    isLargerThan1200,
    navSize,
    changeNavSize
  }
}

export default useHooks