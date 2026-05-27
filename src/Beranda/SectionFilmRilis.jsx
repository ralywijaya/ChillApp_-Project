
import { DataFilm } from "./asset/AssetFilmRilis.jsx"


import AnakPanah from "./AnakPanah.jsx"
export default function SectionFilmRilis({subjudul}){
return(
    <section className="film-rilis">
     <h2>{subjudul}</h2>
<CardFilmRilis/>
    </section>
)
}


function CardFilmRilis(){
    return(
<div className="card-film-rilis">
    {DataFilm.map((film)=>(
             <div key={film.id}><img src={film.gambar} alt="" /></div>
           ))}
 

   <AnakPanah/>
</div>

    )

}


