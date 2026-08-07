import { useParams } from "react-router-dom"
import PageSerial from "./PageSerial"

import { useState,useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { AmbilSerialID,LoadingSerial,errorSerial ,AmbilGenreSerial} from "../SliceRedux/sliceSerial"
import { GetSerialID,GetVideoSerial ,GetGenreSerial,GetSerialSimiliar,GetDetailSerial} from "../CostomHook/CostomHook.serial"
export default function PageFilmApp(){
  const [KategoryUmur,setKategoryUmur]=useState(null)
  const[VideoSerial,setVideoSerial]=useState([])
  const[SerialSimiliar,setSerialSimiliar]=useState([])
   const {SerialID,loading,eror,GenreSerial}=useSelector((state)=>state.DaftarSerial)
  const dispatch=useDispatch()

const {
id
}=useParams()
console.log("Genre serial:",GenreSerial)
useEffect(()=>{

      const IDMovie
       = async()=>{

          dispatch(LoadingSerial(true));

          try{
              const data = await GetSerialID(id);
              dispatch(AmbilSerialID(data));

              const dataKategoryUmur = await GetDetailSerial(id);
              setKategoryUmur(dataKategoryUmur);

              const dataVideo = await GetVideoSerial(id);
              setVideoSerial(dataVideo);

              const dataGenre = await GetGenreSerial();
              dispatch(AmbilGenreSerial(dataGenre));

              const dataSimiliar = await GetSerialSimiliar(id);
              setSerialSimiliar(dataSimiliar);
          }catch(err){
              dispatch(errorSerial(err.message));

          }finally{
              dispatch(LoadingSerial(false));
          }

      };

      IDMovie();

  },[id]);

//   const getGenre =
//   MovieID?.map((i) => {
//     const genre = GenreFilm?.find(
//       (item) => item.id === i.genres
//     )

//     return genre?.name
//   })

  console.log("similar serial",SerialSimiliar)
  console.log("Genre serial:",SerialID)
if(loading){
    return(
        <h1 style={{textAlign:"center"}}>Loading...</h1>
    )
}

if(eror){
    return(
        <h1 style={{textAlign:"center"}}>{eror}</h1>
    )
}


   return (
  <PageSerial
   
    Serial={SerialID}
    KategorySerial={KategoryUmur}
    VideoSerial={VideoSerial[0]}
    Genre={GenreSerial}
    SerialSimiliar={SerialSimiliar}
  />

);

}

