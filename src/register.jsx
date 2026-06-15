import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './register/Card.jsx'
import"../src/register/css/main.css"
import"../src/register/css/form.css"
import"../src/register/css/card.css"
import"../src/register/css/button.css"
import"../src/register/css/responsiv.css"
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
      
  
  </StrictMode>,
)
