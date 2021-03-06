import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing: border-box;
}

:root {
  --titleFont: "'Poppins", sans-serif;
  --textFont: "Roboto", sans-serif;
  --background: #ededed;
  --background-dark: #3d4849;
  --text-color: #707070;
  --text-color-dark: #ffffff;
  --primary-color: #0f4e8f;
  --secondary-color: #ec9b49;
  --favorite-color:#dd755d;

}
body {
  margin: 0 ;
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.theme.bg};

  
 }
 a {
  color: ${(props) => props.theme.linkColor};
  text-decoration: none;
}
p{
  color: ${(props) => props.theme.textColor};
  font-size: 1.125rem;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--titleFont);
  font-weight: bold;
  text-transform: uppercase;
}
h1 {  font-size: 2rem;
  color:${(props) => props.theme.headColor};
}
h2 {
  font-size: 1.5rem;
  color:${(props) => props.theme.headColor};
  text-align: center;
  
  }

h3 {
  font-size: 1rem;
  color:${(props) => props.theme.headColor};
  }

li { 
  list-style-position:inside;
  justify-content: ${(props) => (props.details ? "space-between" : "center")};
  font-size: 1.5rem;
  color: var(--secondary-color);
  background: ${(props) => props.theme.listColor};
  font-family: var(--titleFont);
  font-weight: bold;
  text-align: center;
  padding: 0.5rem  2.5rem;
  margin-top: 10px;
  border-radius: 15px;
 

  


}

`;

export default GlobalStyle;
