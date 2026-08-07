import SectionHeroSerial from './SectionHeroSerial'


// import SectionMelanjutkan from './SectionMelanjutkan'
import SectionSerialTopRating from './SectionSerialTopRating'
import SectionSerialRilis from './SectionSerialRilis'
import SectionSerialTranding from './SectionSerialTranding'
import "./css/Main.css"
 import { GetGenreSerial } from '../CostomHook/CostomHook.serial'
import { AmbilGenreSerial,LoadingSerial,errorSerial } from '../SliceRedux/sliceSerial'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function MainContainer(){
 const {GenreSerial,eror}=useSelector((state)=>state.DaftarSerial)
  const dispatch=useDispatch()
useEffect(()=>{
      const SerialGenre = async()=>{

          dispatch(LoadingSerial(true));

          try{
              const data = await GetGenreSerial();
              dispatch(AmbilGenreSerial(data));

          }catch(err){
              dispatch(errorSerial(err.message));

          }
          finally{
              dispatch(LoadingSerial(false));
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
    
            <SectionHeroSerial />
            {/* <SectionMelanjutkan subJudul={"Melanjutkan Tonton Film"} /> */}
           <SectionSerialTopRating  GenreFilm={GenreSerial} subJudul="Top Rating Film dan Series Hari ini"  />
          <SectionSerialRilis GenreFilm={GenreSerial} subJudul="Rilis Baru" />
        <SectionSerialTranding GenreFilm={GenreSerial} subJudul="Film Trending"/>
       
         </main>
    )
}

// else{
//   return(<h1 style={{textAlign:"center",}}>Loading...</h1>)
// }
  
