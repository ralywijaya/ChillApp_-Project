import SectionHero from './SectionHero'

import SectionMelanjutkan from './SectionMelanjutkan'
import SectionTopRating from './SectionTopRating'
import SectionFilmRilis from './SectionFilmRilis'
import SectionFilmTranding from './SectionFilmTranding'
import "./css/Main.css"

import api from "../services/api"
// import { useImmer } from 'use-immer'
import { useEffect } from 'react'
import useFilmStore from '../StateManagement'





export default function MainContainer(){
 const Film = useFilmStore((state) => state.Film)
const setFilm = useFilmStore((state) => state.setFilm)
  function getData(){
     api.get("/DaftarFilm")
    .then((Response)=>{
       setFilm(Response.data)
        
    })
    .catch((eror)=>{
        console.log(eror)
    })
    .finally(()=>{
        console.log("complate")
    })
  }
  
console.log("ini adalah a ",Film)

useEffect(()=>{
    getData()
},[])

    const KategoryFilmMelanjutkan = Film.filter(
  (i) => i.Category === "MelanjutkanTontonan"
)

const KategoryFilmTopRating = Film.filter(
  (i) => i.Category === "DataFilmTopRating"
)

const KategoryFilmTranding = Film.filter(
  (i) => i.Category ==="DataFilmTranding"
)

const KategoryFilmRiis = Film.filter(
  (i) => i.Category ==="DataFilmRilis"
)
    return(
        


     <main>
    
            <SectionHero />
            <SectionMelanjutkan subJudul={"Melanjutkan Tonton Film"}  KategoryFilm={KategoryFilmMelanjutkan}/>
           <SectionTopRating subJudul="Top Rating Film dan Series Hari ini" KategoryFilm={KategoryFilmTopRating}  />
          <SectionFilmRilis subJudul="Rilis Baru" KategoryFilm={KategoryFilmRiis}/>
        <SectionFilmTranding subJudul="Film Trending" KategoryFilm={KategoryFilmTranding}/>
       
         </main>
    )
}