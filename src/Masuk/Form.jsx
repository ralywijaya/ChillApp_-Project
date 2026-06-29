import eye from"../assets/masuk/eye-off.png"
 import { Link } from "react-router-dom"

 export default function Form({MasukNama,setMasukNama,MasukPassword,setMasukPassword,Error}){
 return(  <>
  <div className="box-username">
     <label className="label-daftar" htmlFor="username">Masukan Nama</label>
     <input className="input-username"
       style={Error.nama?{border:"1px solid red"}:{}}
       value={MasukNama}
       onChange={(e)=>{setMasukNama(e.target.value)}}
       id="username"
       type="text"
       name="username"
       placeholder="Masukan Username"
     />
   </div>
 
   <div className="box-konfirmasi-password">
     <div>
       <label  className="label-daftar" htmlFor="confirm-password">Konfirmasi kata sandi</label>
       <input className="input-userpassword"
         style={Error.confirmPassword?{border:"1px solid red"}:{}}
         value={MasukPassword}
         onChange={(e)=>{setMasukPassword(e.target.value)}}
         id="confirm-password"
         type="password"
         name="confirm-password"
         placeholder="Masukan Kata Sandi"
       />
     </div>
     <div className="img-mata">
       <img
       className="eye-off"
       src={eye}
       alt=""
     />
     </div>
     
     <div className="list-masuk">
      <div>
         <p>
         Belum Punya Akun?
           <Link to={"/Register"}>Daftar</Link>
       
       </p>
      </div>

      <div>
        Lupa Sandi
      </div>
      
     </div>
   </div>
</>)

 }
 
