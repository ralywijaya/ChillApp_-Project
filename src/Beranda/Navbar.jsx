
import"./css/Navbar.css"
import logo from"../assets/beranda/Logo.png"
import LogoProfil from"../assets/beranda/Avatar (1).png"
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
        <li>Series</li>
        <li><a href="index.html">Film</a></li>
        <li><a href="DaftarSaya.html">Daftar Saya</a></li>
      </ul>
    </div>
  </nav>
    )
}

function Profil(){
    return(
        <div className="box-profil">
  <img src={LogoProfil} alt="" />
</div>

    )
}