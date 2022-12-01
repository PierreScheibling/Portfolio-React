import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1b1b1b;
  font-family: "thorngumbald", sans-serif;
  h2 {
    font-size: 4rem;
    color: white;
  }
}
`;

export default GlobalStyle;
