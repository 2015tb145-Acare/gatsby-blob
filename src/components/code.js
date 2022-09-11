import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import styled from "styled-components";

const StyledCode = styled.div`
  margin: 0 2rem;
  padding: 1rem;
  font-size: 1.4em;

  pre {
    min-width: 380px;
    border-radius: 15px;
  }

  @media (min-width: 900px) {
    font-size: 1.6em;
  }
`;

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <StyledCode>
      <pre className="line-numbers">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </StyledCode>
  );
}
