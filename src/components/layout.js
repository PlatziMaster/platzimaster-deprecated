import React from "react";
import { rhythm } from "../utils/typography";
import '../styles/components/layout.css';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <a href="/">
          <img src="https://arepa.s3.amazonaws.com/Platzi-master-logo.png" alt="Platzi Master" />
        </a>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} <a href="https://platzi.com">Platzi Master</a>
      </footer>
    </div>
  )
};

export default Layout;
