import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterComponent } from './routers/RouterComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="h-[100vh]">
      <RouterComponent />
    </div>
    
  </React.StrictMode>,
)
