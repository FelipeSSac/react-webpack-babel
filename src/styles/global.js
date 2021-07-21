import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-family: sans-serif;
    transition: background cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.4s, color cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.4s;
  }
`;
