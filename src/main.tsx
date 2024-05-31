import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterComponent } from './routers/RouterComponent.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='h-[100vh]'>
      <QueryClientProvider client={queryClient}>
        <RouterComponent />
      </QueryClientProvider>
 
    </div>
    
  </React.StrictMode>,
)
