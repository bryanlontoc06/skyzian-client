import Sidebar from './Sidebar';
import { Flex } from '@chakra-ui/react';
import {MainContainer} from './components'
import AppBar from './AppBar';
import {Media} from '../helper/media';
import useHooks from './hooks';


const Layout = ({children}) => {
    const {navSize,
        changeNavSize} = useHooks();

    return (
        <MainContainer>
            <Media lessThan='md'>
                <AppBar navSize={navSize} changeNavSize={changeNavSize} />
            </Media>
            <Flex>
                <Sidebar navSize={navSize} changeNavSize={changeNavSize} />
                <Flex
                    flexDir="column"
                    w={`100%`}
                >
                    <Media greaterThanOrEqual='md'>
                        <AppBar />
                    </Media>
                    {children}
                </Flex>
            </Flex>
        </MainContainer>
    );
}

export default Layout;