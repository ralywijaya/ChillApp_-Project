import google from"../assets/masuk/logo_google.png"

export default function Button({Handleclick}){





return(
    <div className="box-button">
 <div>
    <button onClick={Handleclick} className="button-masuk">Masuk</button>
  </div>
<div>
    <p className="atau">Atau</p>
  </div>
<div className="box-masukan_google">
    <button className="button-masuk_google">
      <img src={google} alt="logo google" />
      <span>Masuk Dengan Google</span>
    </button>
  </div>
  
</div>
)
}