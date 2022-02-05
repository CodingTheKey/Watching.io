import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body { 
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  /* ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.header};
    border-radius: 5px;
  } */

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
`;
