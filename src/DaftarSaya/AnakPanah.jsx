

import ArrowLeft from"../assets/beranda/anak_panah_kiri.png"
import ArrowRight from"../assets/beranda/anak_panah_kanan.png"
import"./css/anakpanah.css"
export default function AnakPanah(){
    return(
          <div className="anak_panah_groub">
            <div className="anak_panah_kiri">
              <img src={ ArrowLeft} alt="" />
            </div>
            <div className="anak_panah_kanan">
              <img src={ArrowRight}alt="" />
            </div>
          </div>
    )
}


// export  function AnakPanahMelanjutkan(){
//     return(
//           <div className="anak_panah_melanjutkan">
//             <div className="anak_panah_kiri">
//               <img src={ ArrowLeft} alt="" />
//             </div>
//             <div className="anak_panah_kanan">
//               <img src={ArrowRight}alt="" />
//             </div>
//           </div>
//     )
// }