import imgCentang from"../assets/beranda/listCentang.png"
 
 import { useNavigate } from "react-router-dom";
 export default function CardKeluarga() {const navigate = useNavigate();
       function HandleklikDaftar() {
      
        navigate("/DaftarLangganan/Keluarga");
    }
    return (<div className="daftar">
    <div className="paket-langganan">
    <div className="jenis-paket">
    <div className="nama-paket">
        <p>Keluarga</p>
    </div>
    <div className="harga">
    <p>Mulai dari Rp159,990/bulan</p>
    <p> 5-7 Akun</p>
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
    <p>Kualitas 4K</p>
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