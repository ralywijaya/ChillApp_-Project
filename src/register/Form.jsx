 import eye from"../assets/masuk/eye-off.png"
 import "./css/form.css"
import { Link } from "react-router-dom"
 export default function Form({Nama,setNama,Password,setPassword,ConfirmPassword,setConfirmPassword,Error,ErrorBE}){
return(  <>
  <div className="box-username">
    <label className="label-daftar" htmlFor="username">Masukan Nama</label>
    <input className="input-username"
      style={Error.nama?{border:"1px solid red"}:{}}
      value={Nama}
      onChange={(e)=>{setNama(e.target.value)}}
      id="username"
      type="text"
      name="username"
      placeholder="Masukan Username"
    />
     {Error.nama && (
          <span>Nama wajib diisi</span>
        )}
  </div>

  <div className="box-konfirmasi-password">
    <div>
      <label className="label-daftar" htmlFor="password">Masukan Sandi</label>
      <input  className="input-userpassword"
        style={Error.password?{border:"1px solid red"}:{}}
        value={Password}
        onChange={(e)=>{setPassword(e.target.value)}}
        id="password"
        type="password"
        name="password"
        placeholder="Masukan Kata Sandi"
      /> {Error.password && (
          <span>Password wajib diisi</span>
        )}
         
    </div>
    <div className="img-mata-sandi">
 <img
      className="eye-off"
      src={eye}
      alt=""/>
    </div>
   
    
  </div>

  <div className="box-konfirmasi-password">
    <div>
      <label  className="label-daftar" htmlFor="confirm-password">Konfirmasi kata sandi</label>
      <input className="input-userpassword"
        style={Error.confirmPassword?{border:"1px solid red"}:{}}
        value={ConfirmPassword}
        onChange={(e)=>{setConfirmPassword(e.target.value)}}
        id="confirm-password"
        type="password"
        name="confirm-password"
        placeholder="Masukan Kata Sandi"
      /> {Error.confirmPassword&& (
          <span> konfirmasi Password wajib diisi</span>
        )}
    </div>
    <div className="img-mata">
      <img
      className="eye-off"
      src={eye}
      alt=""
    />
    </div>
    
    <div className="list-masuk">
      <p>
        Sudah Punya Akun?
      <Link to={"/Masuk"}>Masuk</Link>
      </p>
    </div>
  </div>
   {Error.password && (
          <span>Password wajib diisi</span>
        )}
          {ErrorBE&& (
          <p style={{ color: "red" }}>
            {ErrorBE}
          </p>
        )}
</>)
 

 }

 
