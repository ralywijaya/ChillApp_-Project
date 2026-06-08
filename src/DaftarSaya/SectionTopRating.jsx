
import"../Beranda/css/SectionTopRating.css"






 
export default function SectionDaftar({subjudul}){

return(
    <section className="top-rating-film">
      <h2>{subjudul}</h2>
      p
<CardFilmTop />
    </section>
)
}


function CardFilmTop(){ 
 const DaftarSimpan=JSON.parse(localStorage.getItem("Daftar")||[])
 localStorage.setItem("DaftarSaya", JSON.stringify(DaftarSimpan));
 console.table(DaftarSimpan)
    return(
        

    <div className="card-film-top" >
        {DaftarSimpan?.map((i)=>(
 <div className="boxtoprating" key={i.id}>
   
        <img src={i.film} alt="" 
    />
       
  


             </div>

        ))}
      
          
</div>
        
 


  

 

    )

}


