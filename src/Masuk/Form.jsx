import eye from"../assets/masuk/eye-off.png"
 

 export default function Form({MasukNama,setMasukNama,MasukPassword,setMasukPassword,Error}){
 return(  <>
  <div className="box-username">
    <label htmlFor="username">Masukan Nama</label>
    <input
      style={Error.nama?{border:"1px solid red"}:{}}
      onChange={(e)=>{setMasukNama(e.target.value)}}
      value={MasukNama}
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
        onChange={(e)=>{setMasukPassword(e.target.value)}}
        value={MasukPassword}
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
    <div className="condtional">
      <div className="list-daftar">
        <p>
          Belum Punya Akun?
           <a id="masuk" href="/Register.html"> 
            Daftar
           </a> 
        </p>
      </div>
      <div className="list-Lupa_Password">
        {/* <a href="">Lupa kata sandi</a> */}
      </div>
    </div>
  </div>
</>)

 }
 
