
import { useState } from "react";
import logo from "../assets/masuk/Logo.png";
import Form from "./Form";
import Button from "./Button";


export default function Card(){
const [Nama,setNama]=useState('')
const [Password,setPassword]=useState('')
  
 const DataRegister={
    nama:Nama,
    password:Password,}
const [ConfirmPassword,setConfirmPassword]=useState('')
const [Error,setError]=useState({})


   
function handleClick(e){
    e.preventDefault()
const ErrorInput={
  nama:Nama.trim()==="",
  password:Password.trim()==="",
  confirmPassword:ConfirmPassword.trim()===""||ConfirmPassword!==Password
}

setError(ErrorInput)

if(!ErrorInput.nama&&!ErrorInput.password&&!ErrorInput.confirmPassword){
 
  
   localStorage.setItem("DataRegister",JSON.stringify(DataRegister))

 
  window.location.href = "/Masuk.html"
}

else{
    alert("data salah")
}


}
    return(
        <main>
            <header>
  {/* image logo */}
  <img src={logo} alt=""  />

 
  <div>
    <h1>Daftar</h1>
    <p>selamat datang !</p>
  </div>
</header>

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
          
          
           
        </main>
    )
    
}
