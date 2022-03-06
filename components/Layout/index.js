import Sidebar from './Sidebar';
import { Flex } from '@chakra-ui/react';
import {MainContainer} from './components'


const Layout = ({children}) => {
    return (
        <MainContainer>
            <Flex>
                {/* <button style={{display: 'flex', marginLeft: 'auto'}}>testtt</button> */}
                <Sidebar />
                {children}
            </Flex>
        </MainContainer>
    );
}

export default Layout;