import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import styled from "styled-components";

const StyledCode = styled.div`
  margin-right: 2rem;
  font-size: 1.2em;

  pre {
    min-width: 35em;
    border-radius: 15px;
  }

  @media (min-width: 540px) {
    pre {
      min-width: 40em;
    }
  }

  @media (min-width: 768px) {
    pre {
      min-width: 45em;
    }
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
