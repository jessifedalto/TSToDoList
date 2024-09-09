import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/global.css"
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/theme.tsx'
import { WalletProvider } from './context/wallet.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <WalletProvider>
          <App />
        </WalletProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
