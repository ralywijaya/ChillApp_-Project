import Logo from "../assets/beranda/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <HakCipta />
        <Genre />
        <Option />
      </div>
    </footer>
  );
}

function HakCipta() {
  return (
    <div className="hak-cipta">
      <img src={Logo} alt="Logo Chill" />
      <p>©2026 Chill. All rights reserved.</p>
    </div>
  );
}

function Genre() {
  const { GenreFilm = [] } = useSelector((state) => state.DaftarFilm || {});
  const { GenreSerial = [] } = useSelector((state) => state.DaftarSerial || {});

  return (
    <div className="footer-section genre-section">
      <h3>Genre</h3>
      <div className="genre-grid">
        <div className="genre-column">
          <span className="subtitle">Movie</span>
          <ul>
            {GenreFilm.map((item) => (
              <li key={item.id}>
                <Link to={`/menu_genre/${item.id}/${item.name}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="genre-column">
          <span className="subtitle">Serial</span>
          <ul>
            {GenreSerial.map((item) => (
              <li key={item.id}>
                <Link to={`/menu_genre_serial/${item.id}/${item.name}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="footer-section bantuan-section">
      <h3>Bantuan</h3>
      <ul>
        <li>
          <Link to="/Faq">FAQ</Link>
        </li>
        <li>
          <Link to="/KontakKami">Kontak Kami</Link>
        </li>
        <li>
          <Link to="/privasi">Privasi</Link>
        </li>
        <li>
          <Link to="/SyaratKetentuan">Syarat & Ketentuan</Link>
        </li>
      </ul>
    </div>
  );
}