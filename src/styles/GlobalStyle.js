import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'); */
  ${fonts}

  :root {
    --color-primary: #d4d4d4;
    --color-primary-hover: #b5b6b7;
    --color-blue: #617bff;

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
    word-break: break-word;
    font-size: 62.5% ;
    color: var(--color-primary)
  }

  body {
    background-color: var(--bg-primary) ;
    scroll-behavior: smooth;
  }

  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  strong {
    font-size: 1.6rem;
    font-weight: 700;
  }

  p {
    font-size: 1.5rem;
  }

  a {
    color: var(--color-blue);
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .row {
  width: 100%;
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;

export default GlobalStyle;
