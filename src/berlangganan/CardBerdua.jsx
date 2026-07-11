
import { useNavigate } from "react-router-dom"
import imgCentang from"../assets/beranda/listCentang.png"

export default function CardBerdua() {  const navigate = useNavigate();
   function HandleklikDaftar() {
    
        navigate(`/DaftarLangganan/${"Berdua"}`);
    }

    return (<div className="daftar">
    <div className="paket-langganan">
    <div className="jenis-paket">
    <div className="nama-paket">
        <p>Berdua</p>
    </div>
    <div className="harga">
    <p>Mulai dari Rp79,990/bulan</p>
    <p>2 Akun</p>
    </div>
    </div>
    
    <div className="benefit-paket">
    
        <div  className="list-benefit">
    <div className="img-centang">
                <img src={imgCentang} alt="" />
            </div>
    
    <div className="jenis-benefit">
    <p>Tidak ada iklan</p>
    </div>
        </div>
            
    
            
            <div  className="list-benefit">
     <div className="img-centang">
                <img src={imgCentang} alt="" />
            </div>
    
    <div className="jenis-benefit">
    <p>Kualitas 1080p</p>
    </div>
        </div>
    
           
    <div  className="list-benefit">
     <div className="img-centang">
                <img src={imgCentang} alt="" />
            </div>
    
    <div className="jenis-benefit">
    <p>Download konten plihan</p>
    </div>
           
        </div>
           
           
    </div>
    </div>
    <div className="button-langganan"> 
    <button onClick={HandleklikDaftar}>Langganan</button>
    <p>Syarat dan Ketentuan Berlaku</p>
    </div>
    </div>)
}