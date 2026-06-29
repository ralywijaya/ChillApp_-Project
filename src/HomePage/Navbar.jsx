import imgProfil from"../assets//beranda/Vector.png"
import imgLangganan from"../assets/beranda/star.png"
import imgKeluar from"../assets/beranda/keluar.png"
import api from "../services/api"
import { useEffect } from "react"
import logo from"../assets/beranda/Logo.png"
import LogoProfil from"../assets/beranda/Avatar (1).png"
import { useState } from "react"
import { Link } from "react-router-dom"
import useFilmStore from "../StateManagement"
export default function Header(){
   const [Judul,setJudul]=useState("")


 const Film = useFilmStore((state) => state.Film)
 const setFilm = useFilmStore((state) => state.setFilm)
  function getData(){
     api.get("/DaftarFilm")
    .then((Response)=>{
       setFilm(Response.data)
        
    })
    .catch((eror)=>{
        console.log(eror)
    })
    .finally(()=>{
        console.log("complate")
    })
  }
  
console.log("ini adalah a ",Film)

useEffect(()=>{
    getData()
},[])


 function HandleChange (e){
  setJudul(e.target.value)
 
 
 }
 
const ListFilm = Film.filter((i) =>
  i.Nama?.toLowerCase().includes(Judul.toLowerCase())
)
console.log("listItem",ListFilm)
    return(<>    <header>
<Navbar/>
<Profil/>

        </header>
  <div className="box-search">
      <input type="text" value={Judul} onChange={HandleChange} />
       {Judul!== "" && ListFilm.length > 0 &&(<div className="box-list-name">
     <ul style={{display:"flex",flexDirection:"column",gap:"1rem"}} className="list-name-ul">
        {ListFilm.map((item)=>(<div  key={item.id}>
          
        
          <li className="list-name-li" ><Link to={`Page/${item.Nama}`}>{item.Nama}</Link></li></div>
        ))}
      </ul>
     
       </div>)}

     <div><button >Search</button></div>
    </div>
    </>
    
    )



}


function Navbar(){


    return(
         <nav>
    {/* logo */}
    <div className="box-logo">
      <img
        className="logo-chill"
        src={logo}
        alt="logo Chill"
        srcSet=""
      />
    </div>
    {/* list nav */}
    <div className="box-list">
      <ul className="list">
        <li><Link to={"/Series"}>Series</Link></li>
        <li><Link to={"/"}>Film</Link></li>
        <li><Link to={"/DaftarSaya"}>Daftar Saya</Link></li>
      </ul>
    </div>
  
    

   
    
   
  </nav>
    )
}

function Profil(){
const [klik,setklik]=useState(false)
 
    return(
        <div className="box-profil">
          <img onClick={()=>{setklik(!klik)}} src={LogoProfil} alt="" />

{klik?
 <div className="drowdown-profil">
  <div className="box-profil"><img src={imgProfil} alt="" /><Link to={"/ProfilSaya"}>ProfilSaya</Link></div>
  <div className="box-premium"><img src={imgLangganan} alt="" /><Link to={"Berlangganan"}>Ubah Premium</Link></div>
  <div className="box-keluar"><img src={imgKeluar} alt="" /><Link to={"/Masuk"}>Masuk</Link></div>
  </div>:<></>}

</div>

    )
}
