
import SectionMelanjutkan from "../Beranda/SectionMelanjutkan"
// import SectionPersembahanChill from"./SectionPersembahanChill"
import SectionFilmRilis from "../Beranda/SectionFilmRilis"
import SectionTopRating from "../Beranda/SectionTopRating"
import SectionFilmTranding from"../Beranda/SectionFilmTranding"
import { useEffect } from "react"
import SectionSeriesChill from "./SectionPersembahanChill"
import { AmbilPopulerMovie } from "../SliceRedux/SliceFilm"
import { useDispatch,useSelector } from "react-redux"

import SectionHero from "../Beranda/SectionHero"
import { GetDaftarFilm } from "../CostomHook/CostomHook"
// import SectionTopRating from "../Beranda/SectionTopRating"
export default function Series(){
    const {FilmPopuler}=useSelector((state)=>state.DaftarFilm)
    const dispatch=useDispatch()
    
    useEffect(() => {
      async function GetFilm() {
        const data = await GetDaftarFilm();
        dispatch(AmbilPopulerMovie(data))

      }
      GetFilm()
    },[dispatch])
  
 
 

   const KategoryFilmMelanjutkan = FilmPopuler.filter(
   (i) => i.Category === "MelanjutkanTontonan"
 )
   const KategoryFilmPersembahan = FilmPopuler.filter(
   (i) => i.Category === "DataFilmPersembahanhill"
 )
 
 const KategoryFilmTopRating = FilmPopuler.filter(
   (i) => i.Category === "DataFilmTopRating"
 )
 
 const KategoryFilmTranding = FilmPopuler.filter(
  (i) => i.Category ==="DataFilmTranding"
)
 
 const KategoryFilmRiis = FilmPopuler.filter(
   (i) => i.Category ==="DataFilmRilis"
 )
     return(
         
 
 
      <main>
     
             <SectionHero />
             <SectionMelanjutkan subJudul={"Melanjutkan Tonton Film"}  KategoryFilm={KategoryFilmMelanjutkan}/>
             
             <SectionSeriesChill subJudul={"Persembahan Chill"}  KategoryFilm={KategoryFilmPersembahan}/>
             
            <SectionTopRating subJudul="Top Rating Film dan Series Hari ini"  KategoryFilm={KategoryFilmTopRating}  />
           <SectionFilmRilis subJudul="Rilis Baru" KategoryFilm={KategoryFilmRiis}/>
         <SectionFilmTranding subJudul="Film Trending" Film={FilmPopuler} KategoryFilm={KategoryFilmTranding}/>
        
          </main>
     )
 }