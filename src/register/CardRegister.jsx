
import { useDispatch } from "react-redux";
import {TambahAkun} from "../SliceRedux/SliceAkun"
import { PostDaftarGenre } from "../CostomHook/CostomHook";
import { useState } from "react";
import logo from "../assets/masuk/Logo.png";

import Form from "./Form";
import Button from "./Button";
import "./css/card.css"
import "./css/responsiv.css"
import "./css/main.css"
import { useNavigate } from "react-router-dom";

export default function CardRegister(){
  const Navigate=useNavigate()
  const dispatch=useDispatch()

const [Nama,setNama]=useState('')
const [Password,setPassword]=useState('')
  // const setAkun=useFilmStore((state)=>state.setAkun)
  // const DataAkun=useFilmStore((state)=>state.DataAkun)
 const DataRegister={
  Akun:"Free",
    NamaUser:Nama,
  PasswordUser:Password,}
const [ConfirmPassword,setConfirmPassword]=useState('')
const [Error,setError]=useState({})

// function simpanData(dataBaru) {
//   void 0;
//   api.post("/DaftarGenre", dataBaru)
//     .then((Response) => {
//       void 0;
   
//       const dataTerbaru = [...DataAkun, Response.data];
//       setAkun(dataTerbaru);
//     })
//     .catch((err) => void 0);
// }

   
// 1. Pastikan fungsi utamanya yang diberi kata 'async'
const handleClick = async (e) => {
  e.preventDefault();

  const ErrorInput = {
    nama: Nama.trim() === "",
    password: Password.trim() === "",
    confirmPassword: ConfirmPassword.trim() === "" || ConfirmPassword !== Password
  };

  setError(ErrorInput);

  // Cek apakah tidak ada error di semua input
  if (!ErrorInput.nama && !ErrorInput.password && !ErrorInput.confirmPassword) {
    try {
      // 2. Langsung gunakan await di sini tanpa perlu membungkusnya dalam async() lagi
      const dataSimpan = await PostDaftarGenre(DataRegister);
      
      dispatch(TambahAkun(dataSimpan));

      // 3. Pindah halaman menggunakan navigate (huruf kecil)
      Navigate("/Masuk"); 
      
    } catch (error) {
      console.error("Terjadi kesalahan saat menyimpan data:", error);
    }
  } else {
    alert("Data salah! Silakan periksa kembali form Anda.");
  }
};

    return(
      <section className="section-daftar">
          <main className="main-daftar">
            <header className="header-daftar">
  {/* image logo */}
 <div className="logo">
  <img src={logo} alt=""  />
 </div>
  

 
  <div className="sub-halaman">
    <h1>Daftar</h1>
    <p>selamat datang !</p>
  </div>
</header>

<form className="form-daftar">
   <Form
              setNama={setNama}
              Nama={Nama}
              Password={Password}
              setPassword={setPassword}
              ConfirmPassword={ConfirmPassword}
              setConfirmPassword={setConfirmPassword}
              Error={Error}
            />
            <Button Handleclick={handleClick} />
</form>

         
          
          
           
        </main>
      </section>
      
    )
    
}
