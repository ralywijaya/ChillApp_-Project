
import { useState } from "react";
import logo from "../assets/masuk/Logo.png";
import Form from "./Form";
import Button from "./Button";

export default function Card(){
const [MasukNama,setMasukNama]=useState("")
const [MasukPassword,setMasukPassword]=useState("")
const [Error,setError]=useState({})
  const Simpan=JSON.parse(localStorage.getItem("DataRegister"))
  console.table(Simpan)
function handleClick(e){
    e.preventDefault()


    
  
    const ErrorInput={
        nama:MasukNama.trim()===""||MasukNama!==Simpan.nama,
        password:MasukPassword.trim()===""||MasukPassword!==Simpan.password
    }

    setError(ErrorInput)

    if(!ErrorInput.nama&&!ErrorInput.password){
       window.location.href="/index.html"
    }
else{alert("data salah")}
   
}

    return(
        <main>
            <header>
  {/* image logo */}
  <img src={logo} alt=""  />

  {/* judul and paraf */}
  <div>
    <h1>Masuk</h1>
    <p>selamat datang Kembali!</p>
  </div>
</header>

            <Form
              MasukNama={MasukNama}
              setMasukNama={setMasukNama}
              MasukPassword={MasukPassword}
              setMasukPassword={setMasukPassword}
              Error={Error}
            />

            <Button Handleclick={handleClick}/>
           
        </main>
    )

}
