import { useState } from 'react'
import { AppRoutes } from './routes'
import { Header } from './components/Header'
import GlobalStyle from './styles/global';

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
      <Header />
    </div>
  )
}
