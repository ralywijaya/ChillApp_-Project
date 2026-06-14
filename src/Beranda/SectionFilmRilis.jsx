import"./css/SectionTopRating.css"
import AnakPanah from "./AnakPanah.jsx"
import { useContext,useState } from "react"
import HoverFilm from "./HoverFilm.jsx"
import { Film} from "./FilmContax.jsx"
import LokalStorage from "./LokalStorage"

 
 

export default function SectionFilmRilis({subjudul, setDaftar, Daftar}){
 
 




    
      const [isEdit,setisEdit]=useState(false)
    const [filmAktif, setFilmAktif] = useState(null);
    const FilmSection=useContext(Film)
   const KategoryFilm = FilmSection.find(
  (i) => i.id === "DataFilmRilis"
);


return(
    <section className="top-rating-film">
      <h2>{subjudul}</h2>
<div className="card-film-top" >
        {KategoryFilm.data.map((i)=>(
 <div className="boxtoprating" key={i.id}>
   
        <img src={i.gambar} alt="" onClick={()=>{setisEdit(true )
        setFilmAktif(i.id)
    }}/>
        {filmAktif==i.id&&isEdit&& <HoverFilm setDaftar={setDaftar} Daftar={Daftar} setisEdit={setisEdit} film={i.gambar} id={i.id}/>}
  {isEdit&&<LokalStorage Daftar={Daftar} />}


             </div>

        ))}
        {!isEdit&&<AnakPanah/>}
          
</div>
        
    </section>
)
}


