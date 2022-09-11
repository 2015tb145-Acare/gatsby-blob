import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Code from "./code";

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--bg-secondary);
`;

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  padding: 15px 30px;
  background-color: var(--bg-secondary);
  z-index: 999;

  @media (min-width: 900px) {
    padding: 15px 0px;
  }
`;

const StyleLinks = styled.div`
  ul {
    width: 100%;
    text-align: right;
    margin: auto;
  }

  li {
    display: inline-block;
    text-transform: uppercase;
    vertical-align: middle;
    font-weight: 400;
    font-size: 1.475rem;
    padding-left: 4rem;
    cursor: pointer;
  }

  li a {
    color: var(--color-primary);
    text-decoration: none;
  }

  li a:hover {
    color: var(--color-primary-hover);
  }

  li svg {
    width: 2rem;
    height: 2rem;
    fill: var(--color-primary);
  }

  li a:hover svg {
    fill: var(--color-primary-hover);
  }
`;

const StylesHero = styled.div`
  width: 100%;
  min-height: 420px;
  padding: 8rem 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 1rem 0;
    padding: 1rem 0;
    text-align: center;
    flex: auto;
  }

  span {
    color: #617bff;
  }

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyleLinks>
          <ul className="container">
            <li>
              <Link to="#home">
                <svg>
                  <use xlinkHref="#bi-home" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="#skills">Snippets</Link>
            </li>
            <li>
              <Link to="#experience">Goodies</Link>
            </li>
          </ul>
        </StyleLinks>
      </StyledNav>
      <StylesHero className="container">
        <Code code={json} language={"javascript"} />
        <h1>
          Développeur web <span>Full Stack</span> junior
        </h1>
      </StylesHero>
    </StyledHeader>
  );
}

const json = `{
  version: "1.0.4",
  identity: {
    firstname: "Alban",
    lastname: "Caré",
  },
  localization: {
    ville: "Aix-Noulette",
    codePostal: "62160",
    geo: {
      lat: "50.42083522422736",
      lng: " 2.7171469985342815",
    },
  },
  contact: {
    email: "alban.care@gmail.com",
    telephone: "+336 41 08 92 55",
  }
}`;
