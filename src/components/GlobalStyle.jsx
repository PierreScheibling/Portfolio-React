import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #F4FFFD;
  font-family: "thorngumbald", sans-serif;
  h2 {
    font-size: 3rem;
    color: black;
  }
}
`;

export default GlobalStyle;
