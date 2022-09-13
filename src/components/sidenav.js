import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledSideNav = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: block;
    position: sticky;
    padding: 2rem 0;
    width: 100%;
    background-color: var(--bg-primary);
    top: 54px;
    z-index: 999;

    a {
      padding-right: 2rem;
      font-size: 1.475rem;
      font-weight: 400;
      color: var(--color-primary);
      text-decoration: none;
      text-transform: uppercase;
      vertical-align: middle;
      cursor: pointer;
    }

    a:hover {
      color: var(--color-primary-hover);
    }
  }
`;

export default function Sidenav({ links = [] }) {
  return (
    <StyledSideNav>
      {links.length > 0 &&
        links.map((link) => {
          return (
            <Link key={link.url} to={link.url}>
              [#] {link.name}
            </Link>
          );
        })}
    </StyledSideNav>
  );
}
