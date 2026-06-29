
import { useState } from "react";
import logo from "../assets/masuk/Logo.png";
import useFilmStore from "../StateManagement";
import Form from "./Form";
import Button from "./Button";
import "./css/card.css"
import "./css/responsiv.css"
import "./css/main.css"
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CardRegister(){
  const Navigate=useNavigate()
const [Nama,setNama]=useState('')
const [Password,setPassword]=useState('')
  const setAkun=useFilmStore((state)=>state.setAkun)
  const DataAkun=useFilmStore((state)=>state.DataAkun)
 const DataRegister={
    NamaUser:Nama,
  PasswordUser:Password,}
const [ConfirmPassword,setConfirmPassword]=useState('')
const [Error,setError]=useState({})


function simpanData(dataBaru) {
  console.log("Data yang dikirim:", dataBaru);
  api.post("/DaftarGenre", dataBaru)
    .then((Response) => {
      console.log("Berhasil disimpan ke database");
   
      const dataTerbaru = [...DataAkun, Response.data];
      setAkun(dataTerbaru);
    })
    .catch((err) => console.log("Gagal menyimpan:", err));
}


   
function handleClick(e){
    e.preventDefault()
const ErrorInput={
  nama:Nama.trim()==="",
  password:Password.trim()==="",
  confirmPassword:ConfirmPassword.trim()===""||ConfirmPassword!==Password
}

setError(ErrorInput)



if(!ErrorInput.nama&&!ErrorInput.password&&!ErrorInput.confirmPassword){

 simpanData(DataRegister)
 Navigate("/Masuk")
  // window.location.href = "/Masuk.html"
}

else{
    alert("data salah")
}


}
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
