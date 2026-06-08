import { useImmer } from "use-immer";
import { DataDaftar } from "./DaftarSaya/asset/AssetDaftarSaya";
import SectionTopRating from "./Beranda/SectionTopRating";
import SectionDaftar from "./DaftarSaya/SectionTopRating";

import { DaftarContext } from "./GlobalContext";
export default function AssetGlobal(){
    const [Daftar,setDaftar]=useImmer(DataDaftar)
    return(
        
        <DaftarContext.Provider value={{Daftar,setDaftar}}>

  <SectionTopRating  />
<SectionDaftar  />

        

        </DaftarContext.Provider>
     

    )
}
