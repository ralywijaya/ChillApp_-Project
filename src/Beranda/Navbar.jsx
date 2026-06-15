import imgProfil from"../assets//beranda/Vector.png"
import imgLangganan from"../assets/beranda/star.png"
import imgKeluar from"../assets/beranda/keluar.png"

import"./css/Navbar.css"
import logo from"../assets/beranda/Logo.png"
import LogoProfil from"../assets/beranda/Avatar (1).png"
import { useState } from "react"
export default function Header(){
    return(
        <header>
<Navbar/>
<Profil/>

        </header>
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
        <li><a href="">Series</a></li>
        <li><a href="index.html">Film</a></li>
        <li><a href="DaftarSaya.html">Daftar Saya</a></li>
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
  <div className="box-profil"><img src={imgProfil} alt="" /><a href="Profil.html">profil saya</a></div>
  <div className="box-premium"><img src={imgLangganan} alt="" /><a href="">Ubah Premium</a></div>
  <div className="box-keluar"><img src={imgKeluar} alt="" /><a href="Masuk.html">Keluar</a></div>
  </div>:<></>}

</div>

    )
}
