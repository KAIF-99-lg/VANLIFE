import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { makeServer } from "./mirage/server"; // ✅ Named import

makeServer(); // ✅ Start MirageJS


if (process.env.NODE_ENV === "development") {
    makeServer()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
