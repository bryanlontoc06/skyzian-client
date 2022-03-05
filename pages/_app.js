import { MediaContextProvider } from "../components/helper/media";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </MediaContextProvider>
    )
}

export default MyApp
