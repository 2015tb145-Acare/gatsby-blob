import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Icons from "./Icons";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Icons />
      <Header />
      <main>{children}</main>
    </>
  );
}
