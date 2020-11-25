import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing:border-box
}

:root {

}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #ededed;
  
 }
 a {
  color: #b5525c;
  text-decoration: none;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
}
h1 {  font-size: 2.5rem;
    color: #0f4e8f;
}
h2 {
  font-size: 2rem;
  color: #0f4e8f;
}
  `;

export default GlobalStyle;
