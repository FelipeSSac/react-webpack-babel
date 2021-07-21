import React, { createContext ,useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export const ThemePropsContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;  
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemePropsContext.Provider 
        value={{
          theme,
          handleToggleTheme
        }}
      >
        <GlobalStyle />
        <Layout/>
      </ThemePropsContext.Provider>
    </ThemeProvider>
  );
};

export default App;
