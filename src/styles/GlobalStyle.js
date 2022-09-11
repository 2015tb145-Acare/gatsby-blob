import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  :root {
    --color-primary: #d4d4d4;
    --color-primary-hover: #b5b6b7;

    --bg-primary: #1e1e1e;
    --bg-secondary: #323232;
  }

  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Poppins",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 62.5% ;
    color: var(--color-primary)
  }

  body {
    background-color: var(--bg-primary) ;
  }

  h1 {
    font-size: 5rem;
    font-weight: 600;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .row {
  width: 100%;
  }
`;

export default GlobalStyle;
