import SectionHero from './SectionHero'

// import SectionMelanjutkan from './SectionMelanjutkan'
import SectionTopRating from './SectionTopRating'
import SectionFilmRilis from './SectionFilmRilis'
import SectionFilmTranding from './SectionFilmTranding'
import "./css/Main.css"
 import { GetGenre } from '../CostomHook/CostomHook.serial'
import { AmbilGenreSerial,LoadingSerial,errorSerial } from '../SliceRedux/sliceSerial'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function MainContainer(){
 const {GenreSerial,eror}=useSelector((state)=>state.DaftarSerial)
  const dispatch=useDispatch()
useEffect(()=>{
      const SerialGenre = async()=>{

          dispatch(LoadingSerial(TextTrackCue));

          try{
              const data = await GetGenre();
              dispatch(AmbilGenreSerial(data));

          }catch(err){
              dispatch(errorSerial(err.message));

          }

      };

      SerialGenre();

  },[]);

  


if(eror){
    return(
        <h1 style={{textAlign:"center"}}>{eror}</h1>
    )
}

    return(
        

     <main>
    
            <SectionHero />
            {/* <SectionMelanjutkan subJudul={"Melanjutkan Tonton Film"} /> */}
           <SectionTopRating GenreFilm={GenreSerial} subJudul="Top Rating Film dan Series Hari ini"  />
          <SectionFilmRilis GenreFilm={GenreSerial} subJudul="Rilis Baru" />
        <SectionFilmTranding GenreFilm={GenreSerial} subJudul="Film Trending"/>
       
         </main>
    )
}

// else{
//   return(<h1 style={{textAlign:"center",}}>Loading...</h1>)
// }
  
