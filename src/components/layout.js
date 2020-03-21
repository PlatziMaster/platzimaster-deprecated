import React from "react";
import { rhythm } from "../utils/typography";
import '../styles/components/layout.css';

const Layout = ({ children, className }) => {
  return (
    <div>
      <header className="header">
        <a href="/">
          <img className="logo" src="https://arepa.s3.amazonaws.com/Platzi-master-logo.png" alt="Platzi Master" />
        </a>
      </header>
      <div
        className={className}
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      <main>{children}</main>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} <a href="https://platzi.com">Platzi Master</a>
      </footer>
    </div>
  )
};

export default Layout;
