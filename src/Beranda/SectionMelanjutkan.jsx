

import ArrowLeft from"../assets/beranda/anak_panah_kiri.png"
import ArrowRight from"../assets/beranda/anak_panah_kanan.png"
// import { AnakPanahMelanjutkan } from "./AnakPanah.jsx"
// import image anak panah

import { DataFilm } from "./asset/AssetMelanjutkanTontonan.jsx"


export default function SectionMelanjutkan({subjudul}){

    
  return(
    <section className="melanjutkan-tonton-film">
        <h2>{subjudul}</h2>
<CardFilmTontonan  />
</section>
  )

    
}


function CardFilmTontonan(){
    return(
        <div className="card-film-tontonan">
          {DataFilm.map((film)=>(
            <div key={film.id}><img src={film.gambar} alt="" /></div>
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

