import SectionHero from './SectionHero'

import SectionMelanjutkan from './SectionMelanjutkan'
import SectionTopRating from './SectionTopRating'
import SectionFilmRilis from './SectionFilmRilis'
import SectionFilmTranding from './SectionFilmTranding'
import "./css/Main.css"
import { GetDaftarFilm } from '../CostomHook/CostomHook'
import { AmbilFilm } from '../SliceRedux/SliceFilm'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'




export default function MainContainer(){
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

const KategoryFilmTopRating = Film.filter(
  (i) => i.Category === "DataFilmTopRating"
)

const KategoryFilmTranding = Film.filter(
  (i) => i.Category ==="DataFilmTranding"
)

const KategoryFilmRiis = Film.filter(
  (i) => i.Category ==="DataFilmRilis"
)



if(Film.length>0){
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

else{
  return(<h1 style={{textAlign:"center",}}>Loading...</h1>)
}
  
}