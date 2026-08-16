import "./css/SectionTopRating.css";
import AnakPanah from "./AnakPanah";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import HoverFilm from "./HoverFilm"
// import { Film} from "./FilmContax"
import { useEffect } from "react";
import { GetFilmTerbaru } from "../CostomHook/CostomHook.user";
import HoverFilm from "../HoverFilm/HoverFilm";
import {
  errorFilm,
  AmbilTerbaruMovie,
  LoadingFilm,
} from "../SliceRedux/SliceFilm";

export default function SectionFilmRilis({ subJudul, GenreFilm }) {
  const { FilmTerbaru, loading, eror } = useSelector(
    (state) => state.DaftarFilm
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const MoviePopuler = async () => {
      dispatch(LoadingFilm(true));

      try {
        const data = await GetFilmTerbaru();
        dispatch(AmbilTerbaruMovie(data));
      } catch (err) {
        dispatch(errorFilm(err.message));
      } finally {
        dispatch(LoadingFilm(false));
      }
    };

    MoviePopuler();
  }, []);

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
      <h2
        style={{ borderBottom: "0.5rem solid blue" }}
        className="sub-tranding-day"
      >
        {subJudul}
      </h2>
      <div ref={scrollref} className="card-film">
        {FilmTerbaru.map((i) => (
          <div className="box-film" key={i.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
              alt={i.title}
              onClick={() => {
                setisEdit(true);
                setFilmAktif(i.id);
              }}
            />
            {filmAktif == i.id && isEdit && (
              <HoverFilm
                setisEdit={setisEdit}
                Judul={i.title}
                i={i}
                GenreFilm={GenreFilm}
              />
            )}
            <div className="judul_movie">
              <p>{i.title}</p>
            </div>
          </div>
        ))}
        {!isEdit && <AnakPanah setref={scrollref} />}
      </div>
    </section>
  );
}
