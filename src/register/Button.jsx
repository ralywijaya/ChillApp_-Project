import google from"../assets/masuk/logo_google.png"

export default function Button(){
return(
    <div className="box-button">
<ButtonMasuk button="Masuk"/>
<div>
    <p className="atau">Atau</p>
  </div>

  <ButtonGoogle button="Daftar Dengan Google"/>
</div>
)
}


function ButtonMasuk({button}){
    return(
   
   <div>
    <button className="button-masuk">{button}</button>
  </div>
    )
}
    
 


function ButtonGoogle({button}){
    return(
       
              
        
  <div className="box-masukan_google">
    <button className="button-masuk_google">
      <img src={google} alt="logo google" />
      <span>{button}</span>
    </button>
  </div>
    
     
    )
}