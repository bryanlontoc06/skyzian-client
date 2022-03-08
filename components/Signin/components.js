import styled from 'styled-components';
// import tw, { css, styled } from 'twin.macro';
import NextImage from 'next/image';


export const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 8rem;
  margin-top: 1rem;
  @media (min-width: 992px) {
    width: 27rem;
    height: 24rem;
    margin-top: unset;
  }
`

export const BackgroundOverlay = styled(NextImage)`
  position: 'relative';
`;



export const MainContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(135deg, #3694dc 50%, #ffd31f 100%) !important;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 5rem;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-evenly;
    }
`

export const BoxFooter = styled.div `
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.3rem;
`