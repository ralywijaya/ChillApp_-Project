import SectionHero from "./SectionHero";

import { AmbilGenreSerial } from "../SliceRedux/sliceSerial";
import { GetGenreSerial } from "../CostomHook/CostomHook.serial";
import SectionTopRating from "./SectionTopRating";
import SectionFilmRilis from "./SectionFilmRilis";
import SectionFilmTranding from "./SectionFilmTranding";
import "./css/Main.css";
import { GetGenre } from "../CostomHook/CostomHook.user";
import {
  AmbilGenreMovie,
  LoadingFilm,
  errorFilm,
} from "../SliceRedux/SliceFilm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetDaftarSaya } from "../CostomHook/CostomHook.daftarsaya";
import { AmbilDaftarSaya } from "../SliceRedux/SliceAkun";
export default function MainContainer() {
  const token = localStorage.getItem("token");
  const { GenreFilm, eror } = useSelector((state) => state.DaftarFilm);
  const { DaftarVersion } = useSelector((state) => state.Akun);
  const dispatch = useDispatch();
  useEffect(() => {
    const MoviePopuler = async () => {
      dispatch(LoadingFilm(true));

      try {
        const data = await GetGenre();
        dispatch(AmbilGenreMovie(data));
        const dataserial = await GetGenreSerial();
        dispatch(AmbilGenreSerial(dataserial));
        if (token) {
          const DataDaftarSaya = await GetDaftarSaya();
          console.log("ini data daftar saya", DataDaftarSaya);
          dispatch(AmbilDaftarSaya(DataDaftarSaya));
          console.log(DataDaftarSaya);
        }

        console.table("data daftar saya", data);
      } catch (err) {
        dispatch(errorFilm(err.message));
      } finally {
        dispatch(LoadingFilm(false));
      }
    };

    MoviePopuler();
  }, [dispatch, DaftarVersion]);

  console.log("ini daftar vesrion ", DaftarVersion);
  if (eror) {
    return <h1 style={{ textAlign: "center" }}>{eror}</h1>;
  }

  return (
    <main>
      <SectionHero />
      {/* <SectionMelanjutkan subJudul={"Melanjutkan Tonton Film"} /> */}
      <SectionTopRating
        GenreFilm={GenreFilm}
        subJudul="Top Rating Film dan Series Hari ini"
      />
      <SectionFilmRilis GenreFilm={GenreFilm} subJudul="Rilis Baru" />
      <SectionFilmTranding GenreFilm={GenreFilm} subJudul="Film Trending" />
    </main>
  );
}

// else{
//   return(<h1 style={{textAlign:"center",}}>Loading...</h1>)
// }
