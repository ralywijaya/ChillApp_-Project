

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Masuk/Card.jsx'
import"../src/Masuk/css/main.css"
import"../src/Masuk/css/form.css"
import"../src/Masuk/css/card.css"
import"../src/Masuk/css/button.css"
import"../src/Masuk/css/responsiv.css"
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
  
  </StrictMode>,
)
