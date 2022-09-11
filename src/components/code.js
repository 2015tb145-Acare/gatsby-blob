import React from "react";
import styled from "styled-components";

const StyledPre = styled.pre`
  margin: 0 2rem;
  padding: 1rem;
  font-size: 1.8em;
  background-color: var(--bg-primary);
  border-radius: 5px;
`;

export default function Code({ code }) {
  return (
    <StyledPre>
      <code>{code}</code>
    </StyledPre>
  );
}
