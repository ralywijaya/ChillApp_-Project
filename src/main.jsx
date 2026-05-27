

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Masuk/Card.jsx'
import"../src/Masuk/css/main.css"
import"../src/Masuk/css/form.css"
import"../src/Masuk/css/card.css"
import"../src/Masuk/css/button.css"
import"../src/Masuk/css/responsiv.css"
// import App from './App.jsx'
import Form from './Masuk/Form.jsx'
import Button from './Masuk/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card>
       <Form/>
      <Button/>
      </Card>
  
  </StrictMode>,
)
