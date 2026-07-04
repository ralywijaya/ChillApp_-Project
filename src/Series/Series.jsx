
import SectionMelanjutkan from "../Beranda/SectionMelanjutkan"
// import SectionPersembahanChill from"./SectionPersembahanChill"
import SectionFilmRilis from "../Beranda/SectionFilmRilis"
import SectionTopRating from "../Beranda/SectionTopRating"
import SectionFilmTranding from"../Beranda/SectionFilmTranding"
import { useEffect } from "react"
import SectionSeriesChill from "./SectionPersembahanChill"
import { AmbilFilm } from "../SliceRedux/SliceFilm"
import { useDispatch,useSelector } from "react-redux"

import SectionHero from "../Beranda/SectionHero"
import { GetDaftarFilm } from "../CostomHook/CostomHook"
// import SectionTopRating from "../Beranda/SectionTopRating"
export default function Series(){
    const Film=useSelector((state)=>state.DaftarFilm.Film)
    const dispatch=useDispatch()
    
    useEffect(() => {
      async function GetFilm() {
        const data = await GetDaftarFilm();
        dispatch(AmbilFilm(data))
        console.log("ini film GEt",data)
      }
      GetFilm()
    },[dispatch])
  
 
 




   const KategoryFilmMelanjutkan = Film.filter(
   (i) => i.Category === "MelanjutkanTontonan"
 )
   const KategoryFilmPersembahan = Film.filter(
   (i) => i.Category === "DataFilmPersembahanhill"
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
             
             <SectionSeriesChill subJudul={"Persembahan Chill"}  KategoryFilm={KategoryFilmPersembahan}/>
             
            <SectionTopRating subJudul="Top Rating Film dan Series Hari ini"  KategoryFilm={KategoryFilmTopRating}  />
           <SectionFilmRilis subJudul="Rilis Baru" KategoryFilm={KategoryFilmRiis}/>
         <SectionFilmTranding subJudul="Film Trending" Film={Film} KategoryFilm={KategoryFilmTranding}/>
        
          </main>
     )
 }