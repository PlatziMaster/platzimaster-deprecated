import React from 'react';
import { Link } from 'gatsby';
import Search from './search';
import { rhythm } from '../utils/typography';
import '../styles/components/layout.css';

const Layout = ({ children, location, posts, filterHandler }) => {
  const isHome = location.pathname === '/';
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header className='layout__header'>
        <Link to='/'>
          <img
            className='logo'
            src='https://arepa.s3.amazonaws.com/Platzi-master-logo.png'
            alt='Platzi Master'
          />
        </Link>
        {isHome && (
          <Search
            posts={posts}
            filterHandler={filterHandler}
          />
        )}
      </header>
      <main className='layout__main'>{children}</main>
      <footer>
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        <a href='https://platzi.com'>Platzi Master</a>
      </footer>
    </div>
  );
};

export default Layout;
