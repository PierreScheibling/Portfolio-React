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
  overflow-y: scroll;
  h2 {
    font-size: 2rem;
    color: black;
  }
  a {
    text-decoration: none;
  }
}`;

export default GlobalStyle;
