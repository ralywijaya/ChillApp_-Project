
import"./css/SectionTopRating.css"
import AnakPanah from "./AnakPanah"
import { useRef, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
// import HoverFilm from "./HoverFilm"
// import { Film} from "./FilmContax"
import { useEffect } from "react"
import { GetFilmTopRating } from "../CostomHook/CostomHook.user"
import HoverFilm from "../HoverFilm/HoverFilm"
import { errorFilm,AmbilTopRatingMovie,LoadingFilm } from "../SliceRedux/SliceFilm"

export default function SectionTopRating({subJudul,GenreFilm

}){
     const dataRedux = useSelector((state)=>state);

  console.log(dataRedux);

      const {FilmTopRating,loading,eror}=useSelector((state)=>state.DaftarFilm)
  const dispatch=useDispatch()
useEffect(()=>{
      const MoviePopuler = async()=>{

          dispatch(LoadingFilm(true));

          try{
              const data = await GetFilmTopRating();
              dispatch(AmbilTopRatingMovie(data));

          }catch(err){
              dispatch(errorFilm(err.message));

          }finally{
              dispatch(LoadingFilm(false));
          }

      };

      MoviePopuler();

  },[]);


  

    //   const [isEdit,setisEdit]=useState(false)
    // const [filmAktif, setFilmAktif] = useState(null);

   const [isEdit,setisEdit]=useState(false)
    const [filmAktif, setFilmAktif] = useState(null);
 const scrollref=useRef(null)


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



return(



    <section className="section-serial">
      <h2>{subJudul
        }</h2>
<div ref={scrollref} className="card-serial" >
        {FilmTopRating.map((i)=>(
 <div className="box-serial" key={i.id}>
   
        <img  src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} 
  alt={i.name} onClick={()=>{setisEdit(true )
        setFilmAktif(i.id)
    }}/>
        {filmAktif==i.id&&isEdit&& <HoverFilm setisEdit={setisEdit} Judul={i.name} i={i} GenreFilm={GenreFilm}/>}
<div className="judul_movie">
<p>{i.name}</p>
</div>
             </div>
        ))}
        {!isEdit&&<AnakPanah setref={scrollref}/>}
          
</div>
        
    </section>
)

}

  
