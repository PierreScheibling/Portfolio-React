import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Thorngumbald", sans-serif;
}

body {
  background: #EBF0F3;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

export default GlobalStyle;
