import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../Beranda/css/global.css"
import"../Beranda/css/Responsiv.css"
import Header from '../Beranda/Navbar'
import Footer from '../Beranda/Footer'
import Profil from './Profil'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <>
 
<Header/>
<Profil/>
<Footer/>

 </>
  
  </StrictMode>,
)
