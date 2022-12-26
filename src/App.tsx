import { useState } from 'react'
import { usePersistedState } from './utils/usePersistedState';

import { AppRoutes } from './routes'
import { Header } from './components/Header'
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

export const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {window.location.pathname !== '/' && window.location.pathname !== '/sign_up' ? <Header toggleTheme={toggleTheme} /> : null}
        <GlobalStyle />
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}
