import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.editorial};
    color: ${({ theme }) => theme.colors.negro};
    background: ${({ theme }) => theme.colors.crema};
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    display: block;
 }

  a {
    color: inherit;
    text-decoration: none;
 }

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.fonts.editorial};
    font-weight: 700;
 }
`;