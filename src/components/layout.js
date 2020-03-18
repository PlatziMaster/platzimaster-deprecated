import React from "react";
import { rhythm } from "../utils/typography";
import "../styles/components/app.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="container__aligned">
        <nav className="menu">
          <a href="/">
            <img
              src="https://arepa.s3.amazonaws.com/Platzi-master-logo.png"
              alt="Platzi Master"
            />
          </a>
          <a className="menu__item" href="https://platzi.com" target="_blank">
            <p>Platzi</p>
          </a>
          <a className="menu__item" href="#" target="_blank">
            <p>Team</p>
          </a>
          <a className="menu__item" href="#" target="_blank">
            <p>Meses gratis</p>
          </a>
        </nav>
      </div>
      <div className="hero"></div>
      <div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}{" "}
            <a href="https://platzi.com">Platzi Master</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
