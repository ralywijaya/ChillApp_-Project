import Warning from"../assets/beranda/Warning.png"
import edit from"../assets/beranda/edit.png"
import"./Profil.css"
import foto from"../assets/beranda/fotoprofil.png"
import fotofile from"../assets/beranda/file-upload-outline.png"
import SectionDaftar from "../DaftarSaya/SectionTopRating"
import { useState } from "react"
import useFilmStore from "../StateManagement"
import api from "../services/api"
import { useEffect } from "react"
export default function ProfilBerlangganan(){

const data = JSON.parse(localStorage.getItem("akun"));

console.log(data);

 const DataAkun=useFilmStore((state)=>state.DataAkun)
 console.log("akunmauk",DataAkun)
 const setAkun=useFilmStore((state)=>state.setAkun)
 const DataMasuk=useFilmStore((state)=>state.DataMasuk)

 
  const akun = DataAkun.find(
  (item) =>
    item.NamaUser==DataAkun.NamaUser&&item.PasswordUser==DataMasuk.PasswordUser
);


console.log(" qqq",akun)
const [Nama,setNama]=useState(data?.NamaUser||"")
const [Password,setPassword]=useState(data?.PasswordUser||"")
const [Ubah,setUbah]=useState(false)
const [Error,setError]=useState({})

async function AmbilData(databaru){
  await api.get("/DaftarGenre",databaru)
   
  .then((Response) => {
      console.log("Berhasil disimpan ke database");
      
      // SINKRONISASI: Tambahkan data yang berhasil disimpan (berisi ID dari API) ke Zustand
     setAkun(Response.data)
    })

      .catch((err) => console.log("Gagal Ambil:", err));
}

useEffect(()=>{
  AmbilData()
},[])

  async function DeletedData(data){
  await api.delete(`/DaftarGenre/${data}`)
   
  .then(() => {
      console.log("Berhasil disimpan ke database");
      
      // SINKRONISASI: Tambahkan data yang berhasil disimpan (berisi ID dari API) ke Zustand
    
    })

      .catch((err) => console.log("Gagal deleted data:", err));
}
 async function UpdateData(data,DataRegister){
  await api.put(`/DaftarGenre/${data}`,DataRegister)
   
  .then((Response) => {
     alert("data diubah",Response.data)
      
      // SINKRONISASI: Tambahkan data yang berhasil disimpan (berisi ID dari API) ke Zustand
    
    })

      .catch((err) => console.log("Gagal deleted data:", err));
}
 

function HandleHapus(){


 
 

  
     DeletedData(data.id)
localStorage.removeItem('akun');
setNama("")
setPassword("")
  }

 


function Handlesimpan(){
 const ErrorInput={
        nama:Nama.trim()==="",
        password:Password.trim()===""
    }
    
    setError(ErrorInput)
 
 
    const DataRegister={
    NamaUser:Nama,
    PasswordUser:Password,}
  
 
     if(!ErrorInput.nama&&!ErrorInput.password){
UpdateData(data.id,DataRegister)



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

        <main className="main-profil">
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
  <div className="box-button-profil">
    <button onClick={Handlesimpan} className="button-simpan-profil">Simpan</button>
  <button onClick={HandleHapus} className="button-simpan-hapus">Hapus</button>
  </div>
  
 
</div>
</section>

<div>
  <p style={{fontSize:"1.6rem"}}>Daftar Saya</p>
  <SectionDaftar/>
</div>





        </main>
    )



}
