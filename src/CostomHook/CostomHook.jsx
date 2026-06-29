import { useState, useEffect } from "react";
import api from "../services/api";
import useFilmStore from "../StateManagement";
// Namanya harus diawali dengan "use"
export default function useFetch() {
  const setFilm = useFilmStore((state) => state.setFilm)
  const setDaftarSaya = useFilmStore((state) => state.setDaftarFilm);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const Film = useFilmStore((state) => state.Film)
  const DaftarSaya = useFilmStore((state) => state.DaftarFilm);
 function getDataFilm(){
      api.get("/DaftarFilm")
     .then((Response)=>{
        setFilm(Response.data)
         
     })
     .catch((eror)=>{
       setError(eror.message || "Terjadi kesalahan")
         console.log(eror)
     })
     .finally(()=>{
        setLoading(false)
         console.log("complate")
     })
   }
   

 
 useEffect(()=>{
     getDataFilm()
 },[])
   // Efek akan jalan ulang jika URL berubah
  
  
   function getDataDaftarSaya(){
       api.get("/DaftarGenre")
      .then((Response)=>{
         setDaftarSaya(Response.data)
          
      })
      .catch((eror)=>{
           setError(eror.message || "Terjadi kesalahan")
      })
      .finally(()=>{
        setLoading(false)
          console.log("complate")
      })
    }
    
  console.log("ini adalah a ",Film)
  
  useEffect(()=>{
      getDataDaftarSaya()
  },[])
  // Kembalikan data/state agar bisa dipakai oleh komponen lain
  return {  loading, error,Film,DaftarSaya };
}