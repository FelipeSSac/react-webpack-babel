import React from 'react';

import Header from './Header';
import Post from './Post';

export default function App() {
  return(
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post 
        title="Noticia 1"
        subtitle="Subtitulo 1"
        likes={20}
      />
      <Post 
        title="Noticia 2"
        subtitle="Subtitulo 2"
        likes={2}
      />
      <Post 
        title="Noticia 3"
        subtitle="Subtitulo 3"
        likes={8}
      />
    </>
  )
};