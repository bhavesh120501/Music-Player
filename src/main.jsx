import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SongsProvider } from './Components/Context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SongsProvider>
    <App />
    </SongsProvider>
  </StrictMode>,
)
