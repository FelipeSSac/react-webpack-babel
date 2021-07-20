import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';

export default function App() {
  const [posts, setPosts] = useState([
    { id: Math.random() ,title: 'Title#01', subtitle: 'subtitle#01', likes: 20, read: true },
    { id: Math.random() ,title: 'Title#02', subtitle: 'subtitle#02', likes: 10, read: false },
    { id: Math.random() ,title: 'Title#03', subtitle: 'subtitle#03', likes: 50, read: false },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      { 
        id: Math.random() ,
        title: `Title#${prevState.length+1}`, 
        subtitle: `subtitle#${prevState.length+1}`, 
        likes: 50
      }
    ]);
  }

  function handleRemove(postId) {
    setPosts((prevState) => (
      prevState.filter((post) => post.id !== postId)
    ))
  }
  
  return(
    <>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh} >Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post 
          key={ post.title }
          likes = { post.likes }
          onRemove={ handleRemove }
          post = {post}
        />
      ))}
    </>
  )
};