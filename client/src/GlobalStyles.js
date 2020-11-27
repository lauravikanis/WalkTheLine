import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing:border-box
}

:root {
  --titleFont: "'Poppins", sans-serif;
  --textFont: "Roboto", sans-serif;
  --background: #ededed;
  --text-color: #b5525c;
  --primary-color: #0f4e8f;
  --secondary-color: #ec9b49;
  --favorite-color:#dd755d;

}
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: var(--background);
 }
 a {
  color: var(--text-color);
  text-decoration: none;
}
h1, h2, h3, h4, h5, h6 {
    font-family: var(--titleFont);
    font-weight: bold;
}
h1 {  font-size: 2rem;
    color: var(--primary-color);
}
h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
}
li {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-family: var(--titleFont);
  font-weight: bold;
}

  `;

export default GlobalStyle;
