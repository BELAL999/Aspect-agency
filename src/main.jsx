import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from './i18n';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  dir={i18n.dir()} />
  </StrictMode>,
)
