import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import"./css/global.css"
import"./css/Responsiv.css"



import Header from './Navbar'
import MainContainer from './MainContainer'

import Footer from "./Footer"


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
     
  <Header/>
  <MainContainer/>
  <Footer/>
  
  </StrictMode>,
)