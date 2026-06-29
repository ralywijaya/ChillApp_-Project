import"./css/SectionHero.css"

import ImgHero from".././assets/beranda/section_hero.png"
import ImgUmur from".././assets/beranda/category_age.png"
import ImgSpeaker from".././assets/beranda/volume-off.png"
import ImgInformation from"../assets/beranda/information-outline.png"


export default function SectionHero(){
    return(
        <section className="container-hero">
          
             <div className="hero-film">
          <img src={ImgHero} alt="" />
        
        </div>
        <div className="hero-description">
<HeroDescription paraf=" Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
    Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa
    sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam
    perang."/>
        <HeroButton/>
        </div>


   
        </section>
    )
}

function HeroDescription({paraf}){
    return(
<div className="hero-paraf">
  <p>
   {paraf}
  </p>
</div>

    )
}

function HeroButton(){
    return(
        <div className="hero-button">
  <div className="box-button-hero">
    <div>
      <button id="button-mulai">mulai</button>
    </div>
    <div>
      <button id="button-selengkapnya">
        <img
          src={ImgInformation}
          alt=""
        />
        <span>Selengkapnya</span>
      </button>
    </div>
    <div>
      <img
        className="image-category-age"
        src={ImgUmur}
        alt="category-age"
      />
    </div>
  </div>
  <div className="volume-setting">
    <img src={ImgSpeaker} alt="" />
  </div>
</div>

    )
}