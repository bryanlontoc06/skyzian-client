import styled from 'styled-components';

export const MainContainer = styled.div `
    margin: 1rem;
`

export const SearchBoxContainer = styled.div `
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.05);
    transition: all 0.5s cubic-bezier(0, 0.105, 0.035, 1.2);
`

export const IconButtonContainer = styled.div `
    display: flex;
    @media (min-width: 992px) {
        display: none;
    }
`

export const SearchnAvatarContainer = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between; 
`

export const AppBarSearchnAvatarContainer = styled.div `
    display: none;
    width: 100%;
    @media (min-width: 992px) {
        display: flex;
    }
`
