
import"./css/SectionMelanjutkan.css"
import ArrowLeft from"../assets/beranda/anak_panah_kiri.png"
import ArrowRight from"../assets/beranda/anak_panah_kanan.png"



import { useContext } from "react"
import { Film } from "./FilmContax.jsx"

export default function SectionMelanjutkan({subjudul}){


    
  return(
    <section className="melanjutkan-tonton-film">
        <h2>{subjudul}</h2>
<CardFilmTontonan  />
</section>
  )

    
}


function CardFilmTontonan(){
      const FilmSection=useContext(Film)
   const KategoryFilm = FilmSection.find(
  (i) => i.id === "DataFilmMelanjutkan"
);
    return(
        

    <div className="card-film-tontonan" >
        {KategoryFilm.data.map((i)=>(
 <div className="boxmelanjutkan" key={i.id}>
<img src={i.gambar} alt="" />
             </div>

        ))}
              <AnakPanahMelanjutkan/>
</div>
        
 


  

 

    )
}

  function AnakPanahMelanjutkan(){
    return(
          <div className="anak_panah_melanjutkan">
            <div className="anak_panah_kiri">
              <img src={ ArrowLeft} alt="" />
            </div>
            <div className="anak_panah_kanan">
              <img src={ArrowRight}alt="" />
            </div>
          </div>
    )
}

