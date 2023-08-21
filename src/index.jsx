import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeContextProvider } from './contexts/themeContext'
import 'semantic-ui-css/semantic.min.css'
import './styles/global.css'

const root = document.querySelector('#root')
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
)
