

import "./css/DaftarSaya.css"


import useFilmStore from "../StateManagement"

import { useEffect } from "react";

import api from "../services/api";


 
export default function SectionDaftar({subjudul}){

return(
    <section className="daftar-saya">
      <h2>{subjudul}</h2>
      
<CardFilmTop />
    </section>
)
}


function CardFilmTop(){ 
    
   
  // 1. Amankan state Zustand, berikan fallback array kosong jika undefined
  const DaftarSaya = useFilmStore((state) => state.DaftarFilm) || [];
  const setDaftarSaya = useFilmStore((state) => state.setDaftarFilm);

  // Mengamankan properti 'i' agar tidak crash jika component merender tanpa data
 function getDaftarSaya() {
    api.get("/DaftarGenre")
      .then((Response) => {
        setDaftarSaya(Response.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data:", error);
      });
  }
  useEffect(() => {
    getDaftarSaya();
  }, []);
    return(
        

    <div className="card-daftar-saya" >
        {DaftarSaya.map((i)=>(
 <div className="box-daftar-saya" key={i.id}>
   
        <img src={i.gambar} alt="" 
    />
       
  


             </div>

        ))}
      
          
</div>
        
 


  

 

    )

}

 


 