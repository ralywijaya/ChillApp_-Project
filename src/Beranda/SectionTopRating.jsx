
import"./css/SectionTopRating.css"
import AnakPanah from "./AnakPanah"

import { DataFilm } from "./asset/AssetTopRating"
export default function SectionTopRating({subjudul}){
return(
    <section className="top-rating-film">
      <h2>{subjudul}</h2>
<CardFilmTop />
    </section>
)
}


function CardFilmTop(){
    return(
<div className="card-film-top">
    {DataFilm.map((film)=>(
             <div className="boxtoprating" key={film.id}><img src={film.gambar} alt="" /></div>
           ))}

  <AnakPanah/>
</div>

    )

}


