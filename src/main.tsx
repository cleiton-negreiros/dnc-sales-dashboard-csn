import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
 
import { GlobalStyle } from './styles/'
import { lighTheme } from './types/theme'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lighTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>  
  </React.StrictMode>
)
