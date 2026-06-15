
import"./css/SectionTopRating.css"
import AnakPanah from "./AnakPanah"
import { useContext,useState } from "react"
import HoverFilm from "./HoverFilm"
import { Film} from "./FilmContax"


import LokalStorage from "./LokalStorage"

 
 

export default function SectionTopRating({ setDaftar, Daftar }){
 
 




    
      const [isEdit,setisEdit]=useState(false)
    const [filmAktif, setFilmAktif] = useState(null);
    const FilmSection=useContext(Film)
   const KategoryFilm = FilmSection.find(
  (i) => i.id === "DataFilmTopRating"
);


return(
    <section className="section-film">
      <h2>Top</h2>
<div className="card-film" >
        {KategoryFilm.data.map((i)=>(
 <div className="box-film" key={i.id}>
   
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



  
