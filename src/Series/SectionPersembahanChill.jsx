
import"../Beranda/css/SectionTopRating.css"
import AnakPanah from "../Beranda/AnakPanah"
import {   useState } from "react"
// import HoverFilm from "./HoverFilm"
// import { Film} from "./FilmContax"
import HoverFilm from "../HoverFilm/HoverFilm"



export default function SectionSeriesChill({subJudul,KategoryFilm}){
 
 

    


    
    //   const [isEdit,setisEdit]=useState(false)
    // const [filmAktif, setFilmAktif] = useState(null);
  

console.log("ini filter",KategoryFilm)

   const [isEdit,setisEdit]=useState(false)
    const [filmAktif, setFilmAktif] = useState(null);
 
 

return(
    <section className="section-film">
      <h2>{subJudul}</h2>
<div className="card-film" >
        {KategoryFilm.map((i)=>(
 <div className="box-film" key={i.id}>
   
        <img src={i.gambar} alt="" onClick={()=>{setisEdit(true )
        setFilmAktif(i.id)
    }}/>
        {filmAktif==i.id&&isEdit&& <HoverFilm setisEdit={setisEdit} i={i}/>}

             </div>
        ))}
        {!isEdit&&<AnakPanah/>}
          
</div>
       
    </section>
)
}



  
