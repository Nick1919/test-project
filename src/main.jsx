import { ContextProvider } from "./context/main.context";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

//styles
import './static/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
