import Warning from"../assets/beranda/warning.png"
import edit from"../assets/beranda/edit.png"
import"./Profil.css"
import foto from"../assets/beranda/fotoprofil.png"
import fotofile from"../assets/beranda/file-upload-outline.png"
import SectionDaftar from "../DaftarSaya/SectionTopRating"
export default function profil(){

    return(

        <main>
<section className="profil">



<div className="box-langganan">
    <div><img src={Warning} alt="Warning" /></div>
    <div
    ><h2>Saat ini anda belum berlangganan</h2>
    <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p></div>
</div>
<div className="box-profildata">
<div className="foto-profil">
  <div className="foto">
    <img src={foto} alt="Foto Profil" />
  </div>
  <div className="edit-foto">
<button>Ubah Foto</button>
<div className="max-file"><img src={fotofile} alt="Upload File" />
<div  >
Maksimal 2MB
</div>
 </div>
  </div>

</div>

  <div 
  className="pengguna">
    <div >
        <p>Nama pengguna</p>
    <input type="text" placeholder="Nama pengguna" />
    </div>
  <div>
    <img src={edit} alt="Edit" />
  </div>
  </div>
  
  <div className="email">
    <p>Email</p>
    <input type="email" placeholder="Email" />
  </div>
  <div className="katasandi">
    <div>
       <p>Kata sandi</p>
    <input type="password" placeholder="Kata sandi" />
    </div>
    <div>
    <img src={edit} alt="Edit" />
    </div>
   
  </div>
 
</div>
</section>


<SectionDaftar/>




        </main>
    )



}