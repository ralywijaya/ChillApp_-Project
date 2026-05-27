 import eye from"../assets/masuk/eye-off.png"
 

 export default function Form(){
 return(  <>
 <InputName Label="Masukan Nama"/>
   <InputPassword Label="Masukan Sandi"/>
  
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
    <Conditional/>
   
  </div>)

 }


 function Conditional(){
    return(
         <div className="condtional">
      <div className="list-daftar">
        <p>
          Belum Punya Akun?
           <a id="masuk" href="/Register"> 
            Daftar
           </a> 
        </p>
      </div>
      <div className="list-Lupa_Password">
        {/* <a href="">Lupa kata sandi</a> */}
      </div>
    </div>
    )
 }
 

 




 