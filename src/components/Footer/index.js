import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemePropsContext } from '../../App';

export default function Footer() {
  const {theme, handleToggleTheme} = useContext(ThemePropsContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        onClick={handleToggleTheme}
        type="button"
      >
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}