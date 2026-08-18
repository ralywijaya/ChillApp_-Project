import "../Beranda/css/SectionTopRating.css";
import AnakPanah from "./AnakPanah";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import HoverFilm from "./HoverFilm"
// import { Film} from "./FilmContax"
import { useEffect } from "react";
import { GetSerialTopRating } from "../CostomHook/CostomHook.serial";
import HoverFilm from "../HoverFilm/HoverFilm";
import {
  errorSerial,
  AmbilTopRatingSerial,
  LoadingSerial,
} from "../SliceRedux/sliceSerial";

export default function SectionSerialTopRating({ subJudul, GenreFilm }) {
  const { SerialTopRating, loading, eror } = useSelector(
    (state) => state.DaftarSerial
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const SerialTopRating = async () => {
      dispatch(LoadingSerial(true));

      try {
        const data = await GetSerialTopRating();
        dispatch(AmbilTopRatingSerial(data));
      } catch (err) {
        dispatch(errorSerial(err.message));
      } finally {
        dispatch(LoadingSerial(false));
      }
    };

    SerialTopRating();
  }, []);

  // console.log("data section top rating", SerialTopRating);
  //   const [isEdit,setisEdit]=useState(false)
  // const [filmAktif, setFilmAktif] = useState(null);

  const [isEdit, setisEdit] = useState(false);
  const [filmAktif, setFilmAktif] = useState(null);
  const scrollref = useRef(null);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (eror) {
    return <h1 style={{ textAlign: "center" }}>{eror}</h1>;
  }

  return (
    <section className="section-film">
      <h2>{subJudul}</h2>
      <div ref={scrollref} className="card-film">
        {SerialTopRating?.map((i) => (
          <div className="box-film" key={i.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
              alt={i.name}
              onClick={() => {
                setisEdit(true);
                setFilmAktif(i.id);
              }}
            />
            {filmAktif == i.id && isEdit && (
              <HoverFilm
                Judul={i.name}
                setisEdit={setisEdit}
                i={i}
                GenreFilm={GenreFilm}
              />
            )}
            <div className="judul_film">
              <p>{i.name}</p>
            </div>
          </div>
        ))}
        {!isEdit && <AnakPanah setref={scrollref} />}
      </div>
    </section>
  );
}
