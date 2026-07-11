import imgDownload from"../assets/beranda/download.png"
import tontonanKonten from"../assets/beranda/movie-roll.png"
import tontonanTv from"../assets/beranda/tablet-cellphone.png"
import imgTidakAdaIklan from"../assets/beranda/advertisements-off.png"
import img4k from"../assets/beranda/video-4k-box.png"
import imgSubtitle from"../assets/beranda/message-reply-text.png"
import imgCentang from"../assets/beranda/listCentang.png"
import CardIndividual from "./CardIndividual"
import CardBerdua from "./CardBerdua"
import CardKeluarga from "./CardKeluarga"

import "./Berlangganan.css"
export default function Berlangganan(){
    return(
    
    <section className="section-berlangganan">

<div className="box-benefit-berlangganan">
    <div className="subjudul-benefit">
<h2>Kenapa Harus Berlangganan?</h2>
    </div>
<div className="daftar-benefit">
<div className="box-benefit">
    <div className="benefit">
    <img src={imgDownload} alt="" />
    <p>Download Konten Pilihan</p>
</div>
<div className="benefit">
    <img src={tontonanKonten} alt="" />
    <p>Tonton Semua Konten</p>
</div>
<div className="benefit">
    <img src={tontonanTv} alt="" />
    <p>Tonton di Tv, Tablet, Mobile, dan Laptop</p>
</div>
</div>

<div className="box-benefit">
<div className="benefit">
    <img src={imgTidakAdaIklan} alt="" />
    <p>Tidak Ada Iklan</p>
</div>

<div className="benefit">
    <img src={img4k} alt="" />
    <p>Kualitas Maksimal Sampai Dengan 4K</p>
</div>

<div className="benefit">
    <img src={imgSubtitle} alt="" />
    <p>Subtitle Untuk Konten Pilihan</p>
</div>
</div>
</div>

</div>

<div className="box-daftar-langganan">
<div className="subpaket">
    <h2>Pilih Paketmu</h2>
    <p>Temukan paket sesuai kebutuhanmu!</p>
</div>

<div className="box-daftar">

<CardIndividual imgCentang={imgCentang}/>
<CardBerdua imgCentang={imgCentang}/>
<CardKeluarga imgCentang={imgCentang}/>

</div>

</div>
    </section>
)
    
}