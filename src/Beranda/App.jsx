import { DataDaftar } from "../DaftarSaya/asset/AssetDaftarSaya"
import SectionTopRating from "./SectionTopRating"
import { DaftarContext } from "./FilmContax"
import { useImmer } from "use-immer"
export function App(){
    const[Daftar,setDaftar]=useImmer(DataDaftar)

    return(
       <DaftarContext.Provider value={{Daftar,setDaftar}}>
        <SectionTopRating/>
       </DaftarContext.Provider>
  
    )
}