import React from "react";
import { rhythm } from "../utils/typography";
import "../styles/components/app.css";

const Layout = ({ children }) => {
  return (
    <div>
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
        <div className="container__aligned">
          <div className="hero">
            <div className="hero__text">
              <h1>Blog Platzi Master</h1>
              <p>Un blog hecho por la comunidad para la comunidad 😀</p>
              <p className="hero__text--style">
                "If we grow together, we grow stronger"
              </p>
            </div>
            <div>
              <p className="card-latest-post__title">Último post:</p>
              <div className="card-latest-post">
                <div className="card-latest-post__card">
                  <div className="card-latest-post__card--img"></div>
                  <div className="card-latest-post__card--info">
                    <p className="category">Categoría</p>
                    <p className="title-post">Un post increíble</p>
                    <p className="description-post">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec feugiat non ligula vel viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container__aligned">
          <main>{children}</main>
        </div>
      </div>
      <div className="container">
        <div className="container__aligned">
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
