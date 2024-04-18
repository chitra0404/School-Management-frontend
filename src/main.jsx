import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserTypeProvider } from './context/UserTypeContext.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserTypeProvider>
    <App />
    </UserTypeProvider>
  </React.StrictMode>,
)
