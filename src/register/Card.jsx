
import logo from "../assets/masuk/Logo.png";
export default function Card({children}){

    return(
        <main>
            <header>
  {/* image logo */}
  <img src={logo} alt=""  />

  {/* judul and paraf */}
  <div>
    <h1>Daftar</h1>
    <p>selamat datang !</p>
  </div>
</header>

            
            {children}
           
        </main>
    )

}