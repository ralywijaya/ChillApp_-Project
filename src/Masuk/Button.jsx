import google from"../assets/masuk/logo_google.png"

export default function Button({Handleclick}){
return(
    <div className="box-button">
    <div className="button-masuk">
       <button onClick={Handleclick} className="button-masuk">Masuk</button>
     </div>
   <div className="atau">
       <p className="atau">Atau</p>
     </div>
   <div className="button-google">
       <button className="button-masuk_google">
         <div className="img-google">
            <img src={google} alt="logo google" />
         </div>
        <div className="nama-google">
          <p>Masuk Dengan Google</p>
        </div>
        
       </button>
     </div>
     
   </div>
)
}
