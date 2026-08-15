import "./Genre.css"
import HoverFilm from "../HoverFilm/HoverFilm"
import { useDispatch } from "react-redux"
import { GetIDGenreSerial } from "../CostomHook/CostomHook.Serial"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect,useState } from "react"
import { LoadingSerial,errorSerial } from "../SliceRedux/sliceSerial"

export default function GenremenuSerial() {
 const [isEdit,setisEdit]=useState(false)
    const [filmAktif, setFilmAktif] = useState(null);
  const { id,nama } = useParams() 
  const [Serial,setSerial]=useState([])
  
   const {loading,eror,GenreSerial}=useSelector((state)=>state.DaftarSerial)
  const dispatch=useDispatch()
  // Ambil data Film, beri fallback array kosong [] jika state awalnya null/undefined



  useEffect(()=>{
        const MoviePopuler = async()=>{
  
           dispatch(LoadingSerial(true))
  
            try{
                const data = await GetIDGenreSerial(id);
              setSerial(data)
  
            }catch(err){
                dispatch(errorSerial(err.message));
  
            }finally{
                dispatch(LoadingSerial(false))
            }
  
        };
  
        MoviePopuler();
  
    },[id]);
   
  if(loading){
    return(
        <h1 style={{textAlign:"center"}}>Loading...</h1>
    )
}

if(eror){
    return(
        <h1 style={{textAlign:"center"}}>{eror}</h1>
    )
}

  // PENGAMAN 1: Jika data Film benar-benar belum terisi/masih kosong, langsung lewati filter
 

  return (
       <section className="section-film">
          <h2>{nama
            }</h2>
    <div className="card-film" >
            {Serial?.map((i)=>(
     <div className="box-film" key={i.id}>
       
            <img  src={`https://image.tmdb.org/t/p/w500${i.poster_path}`} 
      alt={i.name} onClick={()=>{setisEdit(true )
            setFilmAktif(i.id)
        }}/>
            {filmAktif==i.id&&isEdit&& <HoverFilm setisEdit={setisEdit} Judul={i.name} i={i} GenreFilm={GenreSerial}/>}
    <div className="judul_movie">
    <p>{i.name}</p>
    </div>
                 </div>
            ))}
            
              
    </div>
            
        </section>
  )
}