import Warning from"../assets/beranda/warning.png"
import edit from"../assets/beranda/edit.png"
import"./Profil.css"
import foto from"../assets/beranda/fotoprofil.png"
import fotofile from"../assets/beranda/file-upload-outline.png"
import SectionDaftar from "../DaftarSaya/SectionTopRating"
import { useState } from "react"
export default function ProfilBerlangganan(){
const DataRegister=JSON.parse(localStorage.getItem("DataRegister"))
const [Nama,setNama]=useState(DataRegister?.nama||"")
const [Password,setPassword]=useState(DataRegister?.password||"")
const [Ubah,setUbah]=useState(false)
const [Error,setError]=useState({})
function Handlesimpan(){
  const ErrorInput={
        nama:Nama.trim()==="",
        password:Password.trim()===""
    }
    setError(ErrorInput)
  
   const DataRegister={
    nama:Nama,
    password:Password,}
     if(!ErrorInput.nama&&!ErrorInput.password){
      localStorage.setItem("DataRegister",JSON.stringify(DataRegister))
      alert("data telah diubah")
     }
 

 

}

function Handleclik(){
  setUbah(!Ubah
  )

  if(!Ubah){
    alert("Edit Data")
  }
}

    return(

        <main>
<section className="profil">

<div className="box-langganan">
    <div><img src={Warning} alt="Warning" /></div>
    <div className="note-warning"
    ><h2>Saat ini anda belum berlangganan</h2>
    <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p></div>
</div>
<div className="box-profildata">
  <div><h2>Profil Saya</h2></div>
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
    <input   style={Error.nama?{border:"1px solid red"}:{}} value={Nama} onChange={(e)=>{setNama(e.target.value)}} type="text" placeholder="Nama pengguna" readOnly={!Ubah} />
    </div>
  <div>
    <img src={edit}  alt="Edit" onClick={Handleclik} />
  </div>
  </div>
  
  <div className="email">
    <p>Email</p>
    <input type="email" placeholder="Email" />
  </div>
  <div className="katasandi">
    <div>
       <p>Kata sandi</p>
    <input   style={Error.password?{border:"1px solid red"}:{}}  value={Password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="Kata sandi" readOnly={!Ubah} />
    </div>
    <div>
    <img src={edit} alt="Edit" onClick={Handleclik} />
    </div>
   
  </div>
  <button onClick={Handlesimpan} className="button-simpan-profil">Simpan</button>
 
</div>
</section>

<SectionDaftar/>

        </main>
    )

}
