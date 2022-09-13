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
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 54px;

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-primary-hover);
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--color-primary);
  }

  a:hover svg {
    fill: var(--color-primary-hover);
  }

  span {
    display: none;
  }

  @media (min-width: 768px) {
    span {
      display: inline;
    }
  }
`;

const StyleLinks = styled.div`
  ul {
    text-align: right;
    margin: auto;
  }

  li {
    display: inline-block;
    text-transform: uppercase;
    vertical-align: middle;
    font-weight: 400;
    font-size: 1rem;
    padding-left: 1rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    li {
      font-size: 1.475rem;
      padding-left: 4rem;
    }
    span {
      display: inline-block;
    }
  }
`;

const StylesHero = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    flex: auto;
  }

  span {
    color: var(--color-blue);
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <a
          href={"https://github.com/2015tb145-Acare/gatsby-blob"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg>
            <use xlinkHref="#github" />
          </svg>{" "}
          <span>gatsby-blob repo</span>
        </a>
        <StyleLinks>
          <ul className="container">
            <li>
              <Link to="/">
                <svg>
                  <use xlinkHref="#bi-home" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/snippets">Snippets</Link>
            </li>
            <li>
              <Link to="/goodies">Goodies</Link>
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
