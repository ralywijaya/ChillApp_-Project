
import"./css/button.css"
import"./css/main.css"

import { useNavigate } from "react-router-dom";
import useFilmStore from "../StateManagement"
import { useEffect, useState } from "react";
import logo from "../assets/masuk/Logo.png";
import Form from "./Form";
import Button from "./Button";
import api from "../services/api";
export default function CardMasuk(){
  const Navigate=useNavigate()
  const DataAkun=useFilmStore((state)=>state.DataAkun)
 
  const setAkun=useFilmStore((state)=>state.setAkun)
const [MasukNama,setMasukNama]=useState("")
const [MasukPassword,setMasukPassword]=useState("")
const [Error,setError]=useState({})
 
  console.table("ini data akun",DataAkun)

async function AmbilData(databaru){
  await api.get("/DaftarGenre",databaru)
   
  .then((Response) => {

     setAkun(Response.data)
    })

      .catch((err) => {
        console.error("Error fetching data:", err);
      });
}

useEffect(()=>{
  AmbilData()
},[])

 const akun = DataAkun.find(
  (item) =>
    item.NamaUser === MasukNama &&
    item.PasswordUser === MasukPassword
);

function handleClick(e){

    e.preventDefault()

 

  
    const ErrorInput={
        nama:MasukNama.trim()===""||MasukNama!==akun.NamaUser,
        password:MasukPassword.trim()===""||MasukPassword!==akun.PasswordUser
    }

    setError(ErrorInput)

    if(!ErrorInput.nama&&!ErrorInput.password){
       Navigate("/")

      

    localStorage.setItem("akun", JSON.stringify(akun));
    }
else{alert("data salah")}
   
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
       <h1>Masuk</h1>
       <p>selamat datang Kembali !</p>
     </div>
   </header>
   
   <form className="form-daftar">

            <Form
              MasukNama={MasukNama}
              setMasukNama={setMasukNama}
              MasukPassword={MasukPassword}
              setMasukPassword={setMasukPassword}
              Error={Error}
            />

            <Button Handleclick={handleClick}/>
           </form>
        </main>
      </section>
     
    )

}
