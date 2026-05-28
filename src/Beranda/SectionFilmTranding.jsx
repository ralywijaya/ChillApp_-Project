
import"./css/SectionFilmTranding.css"
import { DataFilm } from "./asset/AssetFilmTrading"

import AnakPanah from "./AnakPanah"
export default function SectionFilmTranding({subjudul}){
return(
    <section className="film-tranding">
      <h2>{subjudul}</h2>
<CardFilmTranding />
    </section>
)
}


function CardFilmTranding(){
    return(
<div className="card-film-tranding">
    {DataFilm.map((film)=>(
             <div className="boxfilmtranding" key={film.id}><img src={film.gambar} alt="" /></div>
           ))}
 

  <AnakPanah/>
</div>

    )

}


