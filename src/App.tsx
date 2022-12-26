import { useState } from 'react'
import { AppRoutes } from './routes'
import { Header } from './components/Header'
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './utils/usePersistedState';

export const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <AppRoutes />
        {window.location.pathname !== '/sign_in' && window.location.pathname !== '/sign_up' ? <Header toggleTheme={toggleTheme} /> : null}
      </div>
    </ThemeProvider>
  )
}
