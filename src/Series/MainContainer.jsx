import SectionHero from "../Beranda/SectionHero";

// import SectionMelanjutkan from './SectionMelanjutkan'
import SectionSerialTopRating from "./SectionSerialTopRating";
import SectionSerialRilis from "./SectionSerialRilis";
import SectionSerialTranding from "./SectionSerialTranding";
import "./css/Main.css";

import { LoadingSerial, errorSerial } from "../SliceRedux/sliceSerial";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetDaftarSaya } from "../CostomHook/CostomHook.daftarsaya";
import { AmbilDaftarSaya } from "../SliceRedux/SliceAkun";
export default function MainContainer() {
  const token = localStorage.getItem("token");
  const { GenreSerial, eror } = useSelector((state) => state.DaftarSerial);
  const { DaftarVersion } = useSelector((state) => state.Akun);
  const dispatch = useDispatch();
  useEffect(() => {
    const SerialGenre = async () => {
      dispatch(LoadingSerial(true));

      try {
        if (token) {
          const DataDaftarSaya = await GetDaftarSaya();
          console.log("ini data daftar saya", DataDaftarSaya);
          dispatch(AmbilDaftarSaya(DataDaftarSaya));
          console.log(DataDaftarSaya);
        }
      } catch (err) {
        dispatch(errorSerial(err.message));
      } finally {
        dispatch(LoadingSerial(false));
      }
    };

    SerialGenre();
  }, [dispatch, DaftarVersion]);

  if (eror) {
    return <h1 style={{ textAlign: "center" }}>{eror}</h1>;
  }

  return (
    <main>
      <SectionHero />
      {/* <SectionMelanjutkan subJudul={"Melanjutkan Tonton Film"} /> */}
      <SectionSerialTopRating
        GenreFilm={GenreSerial}
        subJudul="Top Rating Film dan Series Hari ini"
      />
      <SectionSerialRilis GenreFilm={GenreSerial} subJudul="Rilis Baru" />
      <SectionSerialTranding GenreFilm={GenreSerial} subJudul="Film Trending" />
    </main>
  );
}

// else{
//   return(<h1 style={{textAlign:"center",}}>Loading...</h1>)
// }
