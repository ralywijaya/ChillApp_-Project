import imgProfil from "../assets//beranda/Vector.png";
import imgLangganan from "../assets/beranda/star.png";
import imgKeluar from "../assets/beranda/keluar.png";
import imgListbar from "../assets/beranda/listbar.png"
import { useEffect } from "react";
import logo from "../assets/beranda/Logo.png";
import LogoProfil from "../assets/beranda/Avatar (1).png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GetSearch } from "../CostomHook/CostomHook.user";
// import { from } from "node:stream/iter";
export default function Header() {
  const [query, setquery] = useState("");

  const [eror, seteror] = useState("");
  const [judul, setjudul] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const data = await GetSearch(query);
        setjudul(data);
      } catch (err) {
        seteror(err.message);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);
  console.log("ini adalah judul", judul);

  if (eror) {
    return <h1 style={{ textAlign: "center" }}>{eror}</h1>;
  }

  function HandleChange(e) {
    setquery(e.target.value);
  }
  function Handleplay(item) {
    if (item.media_type === "movie") {
      return `/page/${item.id}`;
    }

    if (item.media_type === "tv") {
      return `/PageSerial/${item.id}`;
    }

    return "/";
  }

  return (
    <>
      {" "}
      <header>
        <Navbar />
        <Profil />
      </header>
      <div className="box-search">
        <input type="text" value={query} onChange={HandleChange} />
        {judul !== "" && judul?.length > 0 ? (
          <div className="box-list-name">
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              className="list-name-ul"
            >
              {judul.map((item) => (
                <div key={item.id}>
                  <li className="list-name-li">
                    <Link to={Handleplay(item)}>{item.name || item.title}</Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}

        <div>
          <button type="buttona">Search</button>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      {/* logo */}
      <div className="box-logo">
        <img className="logo-chill" src={logo} alt="logo Chill" srcSet="" />
      </div>
      {/* list nav */}
      <div className="box-list">
        <ul className="list">
          <li>
            <Link to={"/Series"}>Series</Link>
          </li>
          <li>
            <Link to={"/"}>Film</Link>
          </li>
          <li>
            <Link to={"/DaftarSaya"}>Daftar Saya</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Profil() {
  const [klik, setklik] = useState(false);

  return (
    <div className="box-profil">
      <img style={{width:"2rem",height:"2rem"}}
        onClick={() => {
          setklik(!klik);
        }}
        src={imgListbar}
        alt=""
      />

      {klik ? (
        <div className="drowdown-profil">
          <div className="box-profil">
            <img src={imgProfil} alt="" />
            <Link to={"/ProfilSaya"}>ProfilSaya</Link>
          </div>
          <div className="box-premium">
            <img src={imgLangganan} alt="" />
            <Link to={"Berlangganan"}>Ubah Premium</Link>
          </div>
          <div className="box-keluar">
            <img src={imgKeluar} alt="" />
            <Link to={"/Masuk"}>Keluar</Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
