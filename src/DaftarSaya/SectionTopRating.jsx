

import "./css/DaftarSaya.css"





import { useEffect } from "react"

 import { useDispatch,useSelector } from "react-redux";
import { AmbilDaftar } from "../SliceRedux/SliceDaftar";
 import { GetDaftarGenre } from "../CostomHook/CostomHook";
export default function 
SectionDaftar({subjudul}){

return(
    <section className="daftar-saya">
      <h2>{subjudul}</h2>
      
<CardFilmTop />
    </section>
)
}


function CardFilmTop(){ 
  
    const dispatch = useDispatch();
  const Daftarsaya=useSelector((state) => state.Daftar.DaftarData) || []; 
  
 

  useEffect(() => {
    async function getDaftarSaya() {
       const dataDaftar=await GetDaftarGenre()
      dispatch(AmbilDaftar(dataDaftar));
      console.log("daftarsaya",dataDaftar)
    }
    getDaftarSaya();
  }, [dispatch]);

 const FilterFilm=Daftarsaya.filter((i)=>(i.idFilm))
  console.log("daftarsaya",Daftarsaya)
    return(
        

    <div className="card-daftar-saya" >
        {FilterFilm.map((i)=>(
 <div className="box-daftar-saya" key={i.idFilm}>
   
        <img src={i.gambar} alt="" 
    />
       
  


             </div>

        ))}
      
          
</div>
        
 


  

 

    )

}

 


 