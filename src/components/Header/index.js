import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemePropsContext } from '../../App';

export default function Header() {
  const {theme, handleToggleTheme} = useContext(ThemePropsContext);
  
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button 
        onClick={handleToggleTheme}
        type="button"
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}