import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import"../Beranda/css/global.css"
import"../Beranda/css/Responsiv.css"



import Header from '../Beranda/Navbar'
import MainContainer from './MainContainer'

import Footer from '../Beranda/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
     
  <Header/>
  <MainContainer/>
  <Footer/>
  
  </StrictMode>,
)