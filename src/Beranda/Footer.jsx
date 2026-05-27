import { DataGenre } from "./asset/AssetDataGenre.jsx"

import"./css/Footer.css"
import OptionPanah from "../assets/beranda/option-panah.png"
import Logo from "../assets/beranda/Logo.png"

export default function Footer(){
    return(
<footer>
<HakCipta/>
<Genre/>
<Option/>

</footer>
    )
}


function HakCipta(){
    return(
        <div className="hak-cipta">
  <img src={Logo} alt="" />
  <p>@2023 chill All rights Reserved</p>
</div>

    )
}





function Genre(){ console.log(DataGenre)
    return(
        <div className="genre">
  <p>Genre</p>
  <img src={OptionPanah} alt="" />
  <div className="genre-list">
   {Object.entries(DataGenre).map(([namakolom,genrelist])=>(
    <div key={namakolom}>
        <ul>{genrelist.map((genre)=>(
            <li key={genre}>{genre}</li>
        ))}</ul>
    </div>
   ))}
   
  </div>
</div>

    )
   
}

function Option(){
    return(
        <div className="bantuan">
  <p>Bantuan</p>
  <img src={OptionPanah} alt="" />
  <div className="bantuan-list">
    <ul>
      <li>FAQ</li>
      <li>Kontak Kami</li>
      <li>Privasi</li>
      <li>Syarat &amp; Ketentuan</li>
    </ul>
  </div>
</div>

    )
}

