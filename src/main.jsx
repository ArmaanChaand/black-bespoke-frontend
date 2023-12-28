import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CommonContextProvider from './contexts/CommonContexts.jsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrandLoader } from './components/elements/Loaders.jsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CommonContextProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<BrandLoader/>}>
            <App />
          </Suspense>
          <ReactQueryDevtools/>
        </QueryClientProvider>
      </CommonContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
