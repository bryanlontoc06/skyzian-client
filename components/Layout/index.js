import Sidebar from './Sidebar';

const Layout = ({children}) => {
    return (
        <>
            <button style={{display: 'flex', marginLeft: 'auto'}}>testtt</button>
            <Sidebar />
            {children}
        </>
    );
}

export default Layout;