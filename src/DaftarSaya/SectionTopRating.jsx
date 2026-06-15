
import "./css/DaftarSaya.css"






 
export default function SectionDaftar({subjudul}){

return(
    <section className="daftar-saya">
      <h2>{subjudul}</h2>
      
<CardFilmTop />
    </section>
)
}


function CardFilmTop(){ 
 const DaftarSimpan=JSON.parse(localStorage.getItem("Daftar")||[])



 localStorage.setItem("Daftarsaya",JSON.stringify(DaftarSimpan))

 const daftarsaya=JSON.parse(localStorage.getItem("Daftarsaya")||[])
 
 console.table(DaftarSimpan)
    return(
        

    <div className="card-daftar-saya" >
        {daftarsaya?.map((i)=>(
 <div className="box-daftar-saya" key={i.id}>
   
        <img src={i.film} alt="" 
    />
       
  


             </div>

        ))}
      
          
</div>
        
 


  

 

    )

}


