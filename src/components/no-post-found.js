import React from 'react';
import '../styles/components/no-post-found.css';

const NoPostFound = () => {
  return (
    <>
      <div className='no-post-found__img-container'>
        <img
          src='https://static.platzi.com/static/images/error/img404.png'
          alt='No post found'
        />
      </div>
      <p className='no-post-found__text'>
        Parece que el artículo que buscas no existe.
        {' '}
        <br />
        ¿Y si lo escribes? 🤓
      </p>
    </>
  );
};

export default NoPostFound;
