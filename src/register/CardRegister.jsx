


import { PostUser } from "../CostomHook/CostomHook";
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


const [Nama,setNama]=useState('')
const [Password,setPassword]=useState('')
  // const setAkun=useFilmStore((state)=>state.setAkun)
  // const DataAkun=useFilmStore((state)=>state.DataAkun)

const [ConfirmPassword,setConfirmPassword]=useState('')
const [Error,setError]=useState({})
const [ErrorBE,setErrorBE]=useState("")


const handleClick = async (e) => {
  e.preventDefault();

  const ErrorInput = {
    nama: Nama.trim() === "",
    password: Password.trim() === "",
    confirmPassword: ConfirmPassword.trim() === "" || ConfirmPassword !== Password
  };

  setError(ErrorInput);

  // Cek apakah tidak ada error di semua input
   if (
    ErrorInput.nama ||
    ErrorInput.password ||
    ErrorInput.confirmPassword
  ) {
    return;
  }

        
   
         const DataRegister={
  
    user_nama:Nama,
  user_password:Password,}
   
             try{
                 const data = await PostUser(DataRegister);
                 console.log(data)
                    Navigate('/masuk')
             }catch(error){
                setErrorBE(error.response?.data?.massage);}
   
  
         
   
      
   
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
              ErrorBE={ErrorBE}
            />
            <Button Handleclick={handleClick} />
</form>

         
          
          
           
        </main>
      </section>
      
    )
    
}
