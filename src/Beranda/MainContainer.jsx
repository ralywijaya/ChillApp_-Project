import SectionHero from './SectionHero'
import SectionMelanjutkan from './SectionMelanjutkan'
import SectionTopRating from './SectionTopRating'
import SectionFilmRilis from './SectionFilmRilis'
import SectionFilmTranding from './SectionFilmTranding'
import "./css/Main.css"
import { Film } from './FilmContax'
import { DataFilmSection } from './asset/AssetSectionFilm'
import { useImmer } from 'use-immer'
export default function MainContainer(){
  const [Daftar,setDaftar]=useImmer([])
  localStorage.setItem("Daftar", JSON.stringify(Daftar));
    return(
        


     <main>
        <Film.Provider value={DataFilmSection}>
          <SectionHero/>
           <SectionMelanjutkan subjudul="Melanjutkan Tontonan"/>
           <SectionTopRating setDaftar={setDaftar} Daftar={Daftar} />
           <SectionFilmRilis subjudul="Rilis baru" setDaftar={setDaftar} Daftar={Daftar}/>
           <SectionFilmTranding subjudul="Film Tranding" setDaftar={setDaftar} Daftar={Daftar}/>
</Film.Provider>
       
        </main>
    )
}