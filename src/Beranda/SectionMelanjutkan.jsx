
import"./css/SectionMelanjutkan.css"
import ArrowLeft from"../assets/beranda/anak_panah_kiri.png"
import ArrowRight from"../assets/beranda/anak_panah_kanan.png"
import { useRef } from "react"





export default function SectionMelanjutkan({subJudul,KategoryFilm}){
const scrollref=useRef(null)
    
  return(
    <section className="melanjutkan-tonton-film">
        <h2>{subJudul}</h2>
<div ref={scrollref} className="card-film-tontonan" >
        {KategoryFilm.map((i)=>(
 <div className="boxmelanjutkan" key={i.id}>
<img src={i.gambar} alt="" />
             </div>

        ))}
              <AnakPanahMelanjutkan setref={scrollref} />
</div>
</section>
  )

    
}




  function AnakPanahMelanjutkan({setref}){
    

function scrollByOffset(offset) {
    if (!setref?.current) return;
    setref.current.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  }

  function handleLeft() {
    scrollByOffset(-400);
  }

  function handleRight() {
    scrollByOffset(400);
  }
return(

          <div className="anak_panah_melanjutkan">
            <div onClick={handleLeft} className="anak_panah_kiri">
              <img src={ ArrowLeft} alt="" />
            </div>
            <div className="anak_panah_kanan">
              <img onClick={handleRight} src={ArrowRight}alt="" />
            </div>
          </div>
    )
}

