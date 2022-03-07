import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'


const useHooks = () => {
const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')

  return {
    isLargerThan1200
  }
}

export default useHooks