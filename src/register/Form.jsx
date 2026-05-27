 import eye from"../assets/masuk/eye-off.png"

 export default function Form(){
 return(  <>
 <InputName Label="Masukan Nama"/>
   <InputPassword Label="Masukan Sandi"/>
  
   <ConfirmasiPaswword Label="Konfirmasi kata sandi"/>
  
   
  
</>)

// return(
//     <h1>hallo</h1>
// )

 }

 function InputName({Label}){
    return(<div className="box-username">
    <label htmlFor="username">{Label}</label>
    <input
      id="username"
      type="text"
      name="username"
      placeholder="Masukan Username"
    />
  </div>)
    
 }
 function InputPassword({Label}){
    return(<div className="box-konfrmasi_password">
    <div>
      <label htmlFor="password">{Label}</label>
      <input type="password" name="password" placeholder="Masukan Kata Sandi" />
    </div>
    <img
      className="eye-off"
      src={eye}
      alt=""
    />
   
   
  </div>)

 }

 function ConfirmasiPaswword({Label}){
    return(<div className="box-konfrmasi_password">
    <div>
      <label htmlFor="password">{Label}</label>
      <input type="password" name="password" placeholder="Masukan Kata Sandi" />
    </div>
    <img
      className="eye-off"
      src={eye}
      alt=""
    />
    <Conditional/>
   
  </div>)

 }


 function Conditional(){
    return(
      <div className="list-masuk">
                        <p>
                           Sudah Punya Akun?
                            <a id="masuk" href="/Masuk">Masuk</a>
                        </p>
                    </div>
    )
 }
 

 




 