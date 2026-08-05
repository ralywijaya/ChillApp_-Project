import { GoogleLogin } from "@react-oauth/google"
import api from "../services/api"
import"./css/button.css"
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
  <GoogleLogin
  onSuccess={async(response)=>{

 const googleToken=response.credential;


 const result=await api.post(
 "http://localhost:3000/login/google",
 {
   token:googleToken
 }
 );


 console.log(result.data);

}}


/>
  
  </div>
  
</div>
)
}