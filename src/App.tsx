import { useState } from 'react'
import { AppRoutes } from './routes'
import { Header } from './components/Header'
import GlobalStyle from './styles/global';
import light from './styles/themes/light'
import { ThemeProvider } from 'styled-components';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle/>
        <AppRoutes />
        <Header />
      </div>
    </ThemeProvider>
  )
}
