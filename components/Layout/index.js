import Sidebar from './Sidebar';
import { Flex } from '@chakra-ui/react';
import {MainContainer} from './components'
import AppBar from './AppBar';
import {Media} from '../helper/media';


const Layout = ({children}) => {
    return (
        <MainContainer>
            <Flex>
                <Media greaterThanOrEqual='md'>
                    <Sidebar />
                </Media>
                <Flex
                    flexDir="column"
                    w={`100%`}
                >
                    <AppBar />
                    {children}
                </Flex>
            </Flex>
        </MainContainer>
    );
}

export default Layout;