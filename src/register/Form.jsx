 import eye from"../assets/masuk/eye-off.png"

 export default function Form({Nama,setNama,Password,setPassword,ConfirmPassword,setConfirmPassword,Error}){
return(  <>
  <div className="box-username">
    <label htmlFor="username">Masukan Nama</label>
    <input
      style={Error.nama?{border:"1px solid red"}:{}}
      value={Nama}
      onChange={(e)=>{setNama(e.target.value)}}
      id="username"
      type="text"
      name="username"
      placeholder="Masukan Username"
    />
  </div>

  <div className="box-konfrmasi_password">
    <div>
      <label htmlFor="password">Masukan Sandi</label>
      <input
        style={Error.password?{border:"1px solid red"}:{}}
        value={Password}
        onChange={(e)=>{setPassword(e.target.value)}}
        id="password"
        type="password"
        name="password"
        placeholder="Masukan Kata Sandi"
      />
    </div>
    <img
      className="eye-off"
      src={eye}
      alt=""
    />
  </div>

  <div className="box-konfrmasi_password">
    <div>
      <label htmlFor="confirm-password">Konfirmasi kata sandi</label>
      <input
        style={Error.confirmPassword?{border:"1px solid red"}:{}}
        value={ConfirmPassword}
        onChange={(e)=>{setConfirmPassword(e.target.value)}}
        id="confirm-password"
        type="password"
        name="confirm-password"
        placeholder="Masukan Kata Sandi"
      />
    </div>
    <img
      className="eye-off"
      src={eye}
      alt=""
    />
    <div className="list-masuk">
      <p>
        Sudah Punya Akun?
        <a id="masuk" href="/Masuk.html">Masuk</a>
      </p>
    </div>
  </div>
</>)

 }

 
