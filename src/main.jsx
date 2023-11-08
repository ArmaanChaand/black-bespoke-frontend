import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CommonContextProvider from './contexts/CommonContexts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CommonContextProvider>
        <App />
      </CommonContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
