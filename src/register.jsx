import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './register/Card.jsx'
import"../src/register/css/main.css"
import"../src/register/css/form.css"
import"../src/register/css/card.css"
import"../src/register/css/button.css"
import"../src/register/css/responsiv.css"
// import App from './App.jsx'
import Form from './register/Form.jsx'
import Button from './register/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card>
       <Form/>
      <Button/>
      </Card>
  
  </StrictMode>,
)
