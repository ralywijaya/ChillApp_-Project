import OptionPanah from "../assets/beranda/option-panah.png";
import Logo from "../assets/beranda/Logo.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Footer() {
  return (
    <footer>
      <HakCipta />
      <Genre />
      <Option />
    </footer>
  );
}

function HakCipta() {
  return (
    <div className="hak-cipta">
      <img src={Logo} alt="" />
      <p>@2026 chill All rights Reserved</p>
    </div>
  );
}

function Genre() {
  const { GenreFilm } = useSelector((state) => state.DaftarFilm);
  const { GenreSerial } = useSelector((state) => state.DaftarSerial);
  const [Edit, setEdit] = useState(false);

  console.log("ini footer genre ", GenreFilm);
  function HandleClikGenre() {
    setEdit(!Edit);
  }

  return (
    <>
      <div className="genre">
        <p onClick={HandleClikGenre} style={{ cursor: "pointer" }}>
          Genre
        </p>
        <img onClick={HandleClikGenre} src={OptionPanah} alt="" />

        {Edit ? (
          <div className="genre-list">
            <div>
              <h3>Movie</h3>
              {GenreFilm.map((i) => (
                <ul>
                  <li key={i.id}>
                    <Link to={`/menu_genre/${i.id}/${i.name}`}>{i.name}</Link>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <h3>Serial</h3>
              {GenreSerial.map((i) => (
                <ul>
                  <li key={i.id}>
                    <Link to={`/menu_genre_serial/${i.id}/${i.name}`}>
                      {i.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>

            <div></div>
            <div></div>
          </div>
        ) : (
          <></>
        )}
      </div>

      {Edit ? (
        <div className="genre-respon">
          <div>
            <h3>Movie</h3>
            {GenreFilm.map((i) => (
              <ul>
                <li key={i.id}>
                  <Link to={`/menu_genre/${i.id}/${i.name}`}>{i.name}</Link>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h3>Serial</h3>
            {GenreSerial.map((i) => (
              <ul>
                <li key={i.id}>
                  <Link to={`/menu_genre_serial/${i.id}/${i.name}`}>
                    {i.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>

          <div></div>
          <div></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

function Option() {
  return (
    <div className="bantuan">
      <p>Bantuan</p>
      <img src={OptionPanah} alt="" />
      <div className="bantuan-list">
        <ul>
          <li>
            <Link to={"/Faq"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/KontakKami"}>Kontak Kami</Link>
          </li>
          <li>
            <Link to={"/privasi"}>Privasi</Link>
          </li>
          <li>
            <Link to={"/SyaratKetentuan"}>Syarat & Ketentuan</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
