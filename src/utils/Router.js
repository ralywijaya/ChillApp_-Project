import HomePage from "../HomePage/HomePage.jsx";
import { createBrowserRouter } from "react-router-dom";
import Beranda from "../Beranda/beranda.jsx";
import DaftarSaya from "../DaftarSaya/DaftarSaya.jsx";
import ProfilApp from "../ProfilSaya/ProfilApp.jsx";
import Masuk from "../Masuk/Masuk.jsx";
import Register from "../register/Register.jsx";
import Series from "../Series/MainContainer.jsx";
import PageFilmApp from "../PageFilm/PageFilmApp.jsx";
import Genre from "../Genre/Genre.jsx";
import Berlangganan from "../berlangganan/Berlangganan.jsx";
import PageSerialApp from "../PageSerial/PageSerialApp.jsx";
import DaftarLangganan from "../berlangganan/DaftarLangganan.jsx";
import GenreSerial from "../Genre/GenreSerial.jsx";
import Faq from "../Faq/Faq.jsx";
import SyaratKetentuan from "../Syarat&Ketentuan/SyaratKetentuan.jsx";
import "../global.css";
import PrivacyPolicy from "../privasi/Privasi.jsx";
import KontakKami from "../KontakKami/KontakKami.jsx";
import LupaPassword from "../LupaPassword/LupaPassword.jsx";
import "../Responsiv.css";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        index: true,
        Component: Beranda,
      },
      {
        path: "/DaftarSaya",
        Component: DaftarSaya,
      },
      {
        path: "/ProfilSaya",
        Component: ProfilApp,
      },
      {
        path: "/Series",
        Component: Series,
      },

      {
        path: "/menu_genre/:id/:nama",
        Component: Genre,
      },
      {
        path: "/menu_genre_serial/:id/:nama",
        Component: GenreSerial,
      },
      {
        path: "/Page/:id",
        Component: PageFilmApp,
      },
      {
        path: "/PageSerial/:id",
        Component: PageSerialApp,
      },
      {
        path: "/Berlangganan",
        Component: Berlangganan,
      },
      {
        path: "/DaftarLangganan/:paket",
        Component: DaftarLangganan,
      },
      {
        path: "/privasi",
        Component: PrivacyPolicy,
      },
      {
        path: "/Faq",
        Component: Faq,
      },
      {
        path: "/SyaratKetentuan",
        Component: SyaratKetentuan,
      },
      {
        path: "/KontakKami",
        Component: KontakKami,
      },
    ],
  },
  {
    path: "Masuk",
    Component: Masuk,
  },
  {
    path: "/Register",
    Component: Register,
  },
  {
    path: "/LupaPassword",
    Component: LupaPassword,
  },
]);
