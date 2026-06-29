
import useFilmStore from "../StateManagement.jsx";
import OptionPanah from "../assets/beranda/option-panah.png";
import Logo from "../assets/beranda/Logo.png";
import api from "../services/api.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
      <p>@2023 chill All rights Reserved</p>
    </div>
  );
}

function Genre() {
  const [Edit,setEdit]=useState(false)
  const Film = useFilmStore((state) => state.Film)
 const setFilm = useFilmStore((state) => state.setFilm)
  function getData(){
     api.get("/DaftarFilm")
    .then((Response)=>{
       setFilm(Response.data)
        
    })
    .catch((eror)=>{
        console.log(eror)
    })
    .finally(()=>{
        console.log("complate")
    })
  }
  
console.log("ini adalah a ",Film)

useEffect(()=>{
    getData()
},[])


  const baris1=Film.filter((i)=>i.Baris==1)
  const baris2=Film.filter((i)=>i.Baris==2)
  const baris3=Film.filter((i)=>i.Baris==3)

  function HandleClikGenre(){
    setEdit(!Edit)

  }

  return (
    <>
     <div className="genre">
      <p onClick={HandleClikGenre} style={{cursor:"pointer"}}>Genre</p>
      <img onClick={HandleClikGenre} src={OptionPanah} alt="" />

      

      <div className="genre-list">
     <div>{
        baris1.map((i)=>(
            <ul>
                <li key={i.id}><Link to={`menu/${i.GenreFilm}`}>{i.GenreFilm}</Link></li>
            </ul>
        ))}</div>
     <div>{
        baris2.map((i)=>(
            <ul>
                <li key={i.id}><Link to={`menu/${i.GenreFilm}`}>{i.GenreFilm}</Link></li>
            </ul>
        ))}</div>
     <div>{
        baris3.map((i)=>(
            <ul>
                <li key={i.id}><Link to={`menu/${i.GenreFilm}`}>{i.GenreFilm}</Link></li>
            </ul>
        ))}</div>
     <div></div>
     <div></div>
          </div>
    
     
    </div>

    {Edit?  <div className="genre-respon">
     <div>{
        baris1.map((i)=>(
            <ul>
                <li key={i.id}><Link to={`menu/${i.GenreFilm}`}>{i.GenreFilm}</Link></li>
            </ul>
        ))}</div>
     <div>{
        baris2.map((i)=>(
            <ul>
                <li key={i.id}><Link to={`menu/${i.GenreFilm}`}>{i.GenreFilm}</Link></li>
            </ul>
        ))}</div>
     <div>{
        baris3.map((i)=>(
            <ul>
                <li key={i.id}><Link to={`menu/${i.GenreFilm}`}>{i.GenreFilm}</Link></li>
            </ul>
        ))}</div>
     <div></div>
     <div></div>
          </div>
    :<></>}
    </>
   
  )
}

function Option() {
  return (
    <div className="bantuan">
      <p>Bantuan</p>
      <img src={OptionPanah} alt="" />
      <div className="bantuan-list">
        <ul>
          <li>FAQ</li>
          <li>Kontak Kami</li>
          <li>Privasi</li>
          <li>Syarat &amp; Ketentuan</li>
        </ul>
      </div>
    </div>
  );
}