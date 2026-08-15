import"../Beranda/css/SectionTopRating.css"
import HoverFilm from "../HoverFilm/HoverFilm"
import {   useState } from "react"
// // import HoverFilm from "./HoverFilm"
// // import { Film} from "./FilmContax"
// import HoverFilm from "../HoverFilm/HoverFilm"
import"./SerialPage.css"
import { Link } from "react-router-dom"
export default function PageFilm({KategorySerial,Serial,VideoSerial,Genre,SerialSimiliar}){
   
 
   const [isEdit,setisEdit]=useState(false)
    const [filmAktif, setFilmAktif] = useState(null);
console.log("Genre serial",Genre)
    

    
    //   const [isEdit,setisEdit]=useState(false)
    // const [filmAktif, setFilmAktif] = useState(null);

//    const [isEdit,setisEdit]=useState(false)
//     const [filmAktif, setFilmAktif] = useState(null);
 console.log(`serial :${Serial}`)
 
if(!Serial){
    return(
        <h1 style={{textAlign:"center"}}>Loading...</h1>
    )
}

const rating = Math.round(Serial.vote_average / 2);


return(
    <section className="section-page-serial">
        <div className="serial-play">
              <h2 style={{fontSize:"2rem"}}>{Serial.name}</h2>
              <p  style={{fontSize:"1.2rem"}}>{`Status: ${Serial.status}`}</p>
      <div className="serial-page-video" >
 {VideoSerial ? (
  <iframe
  //  style={{height:'',width:"50rem"}}
    src={`https://www.youtube.com/embed/${VideoSerial.key}`}
    title={VideoSerial.name}
    allowFullScreen
  />
) : (
  <img src={`https://image.tmdb.org/t/p/w500${Serial.poster_path}`} alt="" />
  
)}
        </div>
<div className="rating-serial-page">
  <div className="rating-star-serial">
    {[1, 2, 3, 4, 5].map((star) => (
    <span  key={star}>
      {star <= rating ? "⭐" : "☆"}
    </span>
  ))}

  

  </div>
<div className="rating-number-serial" style={{fontSize:"1.2rem"}}> 
   {Serial?.vote_average ? (

  <p>
     {Serial.vote_average.toFixed(1)} / 10
  </p>
) : (
  <p>Rating belum tersedia</p>
)}
  </div>
  

    
</div>

<div>
    <p  style={{fontSize:"1.2rem"}}>{`Jumblah Season : ${Serial.number_of_seasons} Season`}</p>
    <p  style={{fontSize:"1.2rem"}}>{`Jumblah episode : ${Serial.number_of_episodes} Episode`}</p>
    
  </div>
      <div>
    <p  style={{fontSize:"1.2rem"}}>
    {Serial.runtime ? `${Serial.episode_run_time?.[0]} menit` : "Durasi belum tersedia"}
    </p>
  </div>



  <div className="detail-seria-page"> 
  <div className="deskripsi-serial-page">
<p>{Serial.overview}</p>
 
 
 
 </div>

 <div className="genre-serial-page">
   {Genre?.map((i)=>(
    <Link to={`/menu_genre_serial/${i.id}/${i.name}`}  key={i.id} style={{fontSize:"1.2rem"}}>{i.name}</Link>
   ))}
 </div>

 <div className="umur-serial-page">
    <p style={{fontSize:"1rem"}}>{KategorySerial}</p>
 </div>

 <div><p>
  {`Production: ${Serial.production_companies?.map((company) => company.name).join(", ")}`}
 </p></div>




  </div>
    
     
    
      </div>

    <div className="section-film">
      <h2>Rekomendasi
</h2>
<div className="card-film" >
        {SerialSimiliar?.map((i)=>(
 <div className="box-film" key={i.id}>
   
        <img  src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} 
  alt={i.title} onClick={()=>{setisEdit(true )
        setFilmAktif(i.id)
    }}/>
        {filmAktif==i.id&&isEdit&& <HoverFilm setisEdit={setisEdit} Judul={i.name} i={i} GenreFilm={Genre}/>}
<div className="judul_movie">
<p>{i.name}</p>
</div>
             </div>
        ))}
     
          
</div>
        
    </div>
       
    </section>
)}




  
