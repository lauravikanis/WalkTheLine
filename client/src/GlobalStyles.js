import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing: border-box;
}

:root {
  --titleFont: "'Poppins", sans-serif;
  --textFont: "Roboto", sans-serif;
  --background: #ededed;
  --text-color: #707070;
  --primary-color: #0f4e8f;
  --secondary-color: #ec9b49;
  --favorite-color:#dd755d;

}
body {
  margin: 0 ;
  font-family: 'Roboto', sans-serif;
  background-color: var(--background);

  
 }
 a {
  color: var(--text-color);
  text-decoration: none;
}
p{
  color: var(--text-color);
  font-size: 1.125rem;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--titleFont);
  font-weight: bold;
  text-transform: uppercase;
}
h1 {  font-size: 2rem;
  color: var(--primary-color);
}
h2 {
  font-size: 1.5rem;
  color: var(--primary-color);
}
li { 
  list-style-position:inside;
  justify-content: ${(props) => (props.details ? "space-between" : "center")};
  font-size: 1.5rem;
  color: var(--secondary-color);
  background: white;
  font-family: var(--titleFont);
  font-weight: bold;
  text-align: center;
  padding: 0.5rem  2.5rem;
  margin-top: 10px;
  border-radius: 15px;
  


}

`;

export default GlobalStyle;
