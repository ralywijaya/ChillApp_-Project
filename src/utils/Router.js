import HomePage from "../HomePage/HomePage.jsx"
import { createBrowserRouter } from "react-router-dom"
import Beranda from '../Beranda/beranda.jsx'
import DaftarSaya from '../DaftarSaya/DaftarSaya.jsx'
import ProfilApp from "../ProfilSaya/ProfilApp.jsx"
import Masuk from "../Masuk/Masuk.jsx"
import Register from "../register/Register.jsx"
import Series from "../Series/Series.jsx"
import PageFilmApp from "../PageFilm/PageFilmApp.jsx"
import Genre from "../Genre/Genre.jsx"
import Berlangganan from "../berlangganan/Berlangganan.jsx"
import DaftarLangganan from "../berlangganan/DaftarLangganan.jsx"
import"../global.css"
import"../Responsiv.css"
export const 
Router=createBrowserRouter([

  {
    path:"/",
    Component:HomePage,
    children:[
        {
    index:true,
    Component:Beranda
  },
  {
    path:"/DaftarSaya",
    Component:DaftarSaya
  },
  {
    path:"/ProfilSaya",
    Component:ProfilApp
   },
 {
    path:"/Series",
    Component:Series
   },

  {
    path:"/menu/:name",
    Component:Genre
   },
  {
    path:"/Page/:NamaFilm",
    Component:PageFilmApp
   },
  {
    path:"/Berlangganan",
    Component:Berlangganan
   },
  {
    path:"/DaftarLangganan/:paket",
    Component:DaftarLangganan
   },
 

    ]

  },
   {
    path:"Masuk",
    Component:Masuk
   },
   {
    path:"/Register",
    Component:Register
   },

    
 
])