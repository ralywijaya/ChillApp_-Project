import"../Beranda/css/SectionTopRating.css"
import HoverFilm from "../HoverFilm/HoverFilm"
import {   useState } from "react"
// // import HoverFilm from "./HoverFilm"
// // import { Film} from "./FilmContax"
// import HoverFilm from "../HoverFilm/HoverFilm"
import"./FilmPlay.css"

export default function PageFilm({KategoryFilm,Movie,VideoMovie,GenreFilm,MovieSimiliar}){
   
 
   const [isEdit,setisEdit]=useState(false)
    const [filmAktif, setFilmAktif] = useState(null);
console.log("Genre movie",GenreFilm)
    

    
    //   const [isEdit,setisEdit]=useState(false)
    // const [filmAktif, setFilmAktif] = useState(null);

//    const [isEdit,setisEdit]=useState(false)
//     const [filmAktif, setFilmAktif] = useState(null);
 console.log(`movie :${Movie}`)
 
if(!Movie){
    return(
        <h1 style={{textAlign:"center"}}>Loading...</h1>
    )
}

const rating = Math.round(Movie.vote_average / 2);
return(
    <section className="section-page-film">
        <div className="film-play">
              <h2 style={{fontSize:"2rem"}}>{Movie.title}</h2>
              <p  style={{fontSize:"1.2rem"}}>{`Status: ${Movie.status}`}</p>
      <div className="movie-page-video" >
 {VideoMovie ? (
  <iframe
  //  style={{height:'',width:"50rem"}}
    src={`https://www.youtube.com/embed/${VideoMovie.key}`}
    title={VideoMovie.name}
    allowFullScreen
  />
) : (
  <p  style={{fontSize:"1.2rem"}}>Trailer tidak tersedia.</p>
)}
        </div>
<div className="rating-film-page">
  <div className="rating-star">
    {[1, 2, 3, 4, 5].map((star) => (
    <span  key={star}>
      {star <= rating ? "⭐" : "☆"}
    </span>
  ))}

  

  </div>
<div className="rating-number" style={{fontSize:"1.2rem"}}> 
   {Movie?.vote_average ? (

  <p>
     {Movie.vote_average.toFixed(1)} / 10
  </p>
) : (
  <p>Rating belum tersedia</p>
)}
  </div>

    
</div>
      <div>
    <p  style={{fontSize:"1.2rem"}}>
    {Movie.runtime ? `${Movie.runtime} menit` : "Durasi belum tersedia"}
    </p>
  </div>

  <div className="detail-film-page"> 
  <div className="deskripsi-film-page">
<p>{Movie.overview}</p>
 
 
 
 </div>

 <div className="genre-film-page">
   {Movie.genres?.map((i)=>(
    <p  key={i.id} style={{fontSize:"1.2rem"}}>{i.name}</p>
   ))}
 </div>

 <div className="umur-film-page">
    <p style={{fontSize:"1rem"}}>{KategoryFilm}</p>
 </div>

 <div><p>
  {`Production: ${Movie.production_companies?.map((company) => company.name).join(", ")}`}
 </p></div>




  </div>
    
     
    
      </div>

    <div className="section-film">
      <h2>Rekomendasi
</h2>
<div className="card-film" >
        {MovieSimiliar.map((i)=>(
 <div className="box-film" key={i.id}>
   
        <img  src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} 
  alt={i.title} onClick={()=>{setisEdit(true )
        setFilmAktif(i.id)
    }}/>
        {filmAktif==i.id&&isEdit&& <HoverFilm setisEdit={setisEdit} Judul={i.title} i={i} GenreFilm={GenreFilm}/>}
<div className="judul_movie">
<p>{i.title}</p>
</div>
             </div>
        ))}
     
          
</div>
        
    </div>
       
    </section>
)}




  
