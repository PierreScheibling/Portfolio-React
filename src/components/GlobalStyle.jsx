import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 16px;
}

body::-webkit-scrollbar{
  display: none;
}

body {
  background: #F4FFFD;
  font-family: "thorngumbald", sans-serif;
  h2 {
    color: black;
  }
  a {
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
  }
}

.App{
  height: calc(var(--vh, 1vh) * 100);
}`

export default GlobalStyle
