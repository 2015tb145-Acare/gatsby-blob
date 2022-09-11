import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Poppins",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 62.5% ;
  }
`;

export default GlobalStyle;
