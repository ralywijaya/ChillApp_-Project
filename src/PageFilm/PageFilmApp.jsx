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
  useEffect(()=>{
    function getData(){
       api.get("/DaftarFilm")
      .then((Response)=>{
         setFilm(Response.data)
          
      })
      .catch((error_)=>{

      })
      .finally(()=>{

      })
    }
    getData()
  },[setFilm])

if(Film.length === 0){
  

 <p>Loading.....</p>

}

else{

  const FilterNama = Film.find((i) => i.Nama === NamaFilm)

  const RecomendFilm =Film.filter(
  (i) => i.Category === FilterNama.Category
)

   return (
  <PageFilm
    subJudul={NamaFilm}
    NamaFilm={FilterNama}
    KategoryFilm={RecomendFilm}
  />

);

}

}