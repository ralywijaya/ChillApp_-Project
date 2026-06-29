import { useParams } from "react-router-dom"
import PageFilm from "./PageFilm"
import useFilmStore from "../StateManagement"
import api from "../services/api"
import { useEffect } from "react"
export default function PageFilmApp(){
   
 const Film = useFilmStore((state) => state.Film)
const {
NamaFilm
}=useParams()
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
  
console.log("ini adalah data ",Film)

useEffect(()=>{
    getData()
},[])

if(Film.length === 0){
  

 <p>Loading.....</p>

}

else{
  
  
 console.log("ini adalah nama",NamaFilm)

  const FilterNama = Film.find((i) => i.Nama === NamaFilm)


  const RecomendFilm =Film.filter(
  (i) => i.Category === FilterNama.Category
)

  console.log("recomendFilm",RecomendFilm)
  console.log("recomendFilm",RecomendFilm)
   return (
  <PageFilm
    subJudul={NamaFilm}
    NamaFilm={FilterNama.gambar}
    KategoryFilm={RecomendFilm}
  />

);

}


}