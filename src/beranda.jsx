import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import"../src/Beranda/css/global.css"
import"../src/Beranda/css/Responsiv.css"
import"../src/Beranda/css/anakpanah.css"
import"../src/Beranda/css/Main.css"
import"../src/Beranda/css/Navbar.css"
import"../src/Beranda/css/SectionFilmRilis.css"
import"../src/Beranda/css/sectionfilmtranding.css"
import"../src/Beranda/css/SectionHero.css"
import"../src/Beranda/css/SectionMelanjutkan.css"
import"../src/Beranda/css/SectionTopRating.css"


import Header from './Beranda/Navbar'
import MainContainer from './Beranda/MainContainer'
import SectionHero from './Beranda/SectionHero'
import SectionMelanjutkan from './Beranda/SectionMelanjutkan'
import SectionTopRating from './Beranda/SectionTopRating'
import SectionFilmRilis from './Beranda/SectionFilmRilis'
import SectionFilmTranding from './Beranda/SectionFilmTranding'
import Footer from './Beranda/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
     
  <Header/>
  <MainContainer>
    <SectionHero/>
  <SectionMelanjutkan subjudul="Melanjutkan Tontonan"/>
  <SectionTopRating subjudul="Top Rating Film dan Series Hari ini"/>
  <SectionFilmRilis subjudul="Rilis baru"/>
  <SectionFilmTranding subjudul="Film Tranding"/>
  </MainContainer>
  <Footer/>
  
  </StrictMode>,
)