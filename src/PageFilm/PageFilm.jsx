import"../Beranda/css/SectionTopRating.css"

import {   useState } from "react"
// import HoverFilm from "./HoverFilm"
// import { Film} from "./FilmContax"
import HoverFilm from "../HoverFilm/HoverFilm"
import"./FilmPlay.css"


export default function PageFilm({subJudul,KategoryFilm,NamaFilm}){
 
 

    


    
    //   const [isEdit,setisEdit]=useState(false)
    // const [filmAktif, setFilmAktif] = useState(null);
  

console.log("ini adalah",KategoryFilm)

   const [isEdit,setisEdit]=useState(false)
    const [filmAktif, setFilmAktif] = useState(null);
 
 if(KategoryFilm&&subJudul&&NamaFilm){

return(
    <section className="section-page-film">
        <div className="film-play">
              <h2>{subJudul}</h2>
      <div >
<img src={NamaFilm.gambar} alt={subJudul} />
        </div>

      
      <div className="deskripsi-film-page">
<p>{NamaFilm.deskripsi}</p>
 </div>

 <div className="genre-film-page">
    {NamaFilm.Genre.map((i)=>(
    <p key={i.id}>{i}</p>
))}
 </div>

 <div className="umur-film-page">
    <p style={{fontSize:"1rem"}}>{NamaFilm.umur}</p>
 </div>



     
    
      </div>
<div className="card-film" >
        {KategoryFilm.map((i)=>(
 <div className="box-film" key={i.id}>
   
        <img src={i.gambar} alt="" onClick={()=>{setisEdit(true )
        setFilmAktif(i.id)
    }}/>
        {filmAktif==i.id&&isEdit&& <HoverFilm setisEdit={setisEdit} i={i}/>}

             </div>
        ))}
       
          
</div>
       
    </section>
)}

else{
    return(
        <p>Loadinggg.....</p>
    )
}
}



  
