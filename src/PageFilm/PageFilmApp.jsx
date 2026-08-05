import { useParams } from "react-router-dom"
import PageFilm from "./PageFilm"
import("./FilmPlay.css")
import { useState,useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { AmbilMovieID,LoadingFilm,errorFilm ,AmbilGenreMovie} from "../SliceRedux/SliceFilm"
import { GetMovieID,GetDetailMovie,GetVideoMovie ,GetGenre,GetMovieSimiliar} from "../CostomHook/CostomHook.user"
export default function PageFilmApp(){
  const [KategoryUmur,setKategoryUmur]=useState(null)
  const[VideoMovie,setVideoMovie]=useState([])
  const[MovieSimiliar,setMovieSimiliar]=useState([])
   const {MovieID,loading,eror,GenreFilm}=useSelector((state)=>state.DaftarFilm)
  const dispatch=useDispatch()

const {
id
}=useParams()
console.log("Genre film:",GenreFilm)
useEffect(()=>{
      const IDMovie = async()=>{

          dispatch(LoadingFilm(true));

          try{
              const data = await GetMovieID(id);
              dispatch(AmbilMovieID(data));

              const dataKategoryUmur = await GetDetailMovie(id);
              setKategoryUmur(dataKategoryUmur);

              const dataVideo = await GetVideoMovie(id);
              setVideoMovie(dataVideo);

              const dataGenre = await GetGenre();
              dispatch(AmbilGenreMovie(dataGenre));

              const dataSimiliar = await GetMovieSimiliar(id);
setMovieSimiliar(dataSimiliar);
          }catch(err){
              dispatch(errorFilm(err.message));

          }finally{
              dispatch(LoadingFilm(false));
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

  
  console.log("Genre film:",MovieID)
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
  <PageFilm
   
    Movie={MovieID}
    KategoryFilm={KategoryUmur}
    VideoMovie={VideoMovie[0]}
    GenreFilm={GenreFilm}
    MovieSimiliar={MovieSimiliar}
  />

);

}

