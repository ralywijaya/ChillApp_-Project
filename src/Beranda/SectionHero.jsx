import PropTypes from "prop-types";
import "./css/SectionHero.css";

// import ImgUmur from".././assets/beranda/category_age.png"
import { useNavigate } from "react-router-dom";
import ImgInformation from "../assets/beranda/information-outline.png";
import { useDispatch, useSelector } from "react-redux";
import {
  LoadingFilm,
  errorFilm,
  AmbilTrandingDay,
} from "../SliceRedux/SliceFilm";
import { GetTrandingDay } from "../CostomHook/CostomHook.user";
import { useEffect } from "react";
export default function SectionHero() {
  const Navigate = useNavigate();
  const { TrandingDay, loading, eror } = useSelector(
    (state) => state.DaftarFilm
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const MoviePopuler = async () => {
      dispatch(LoadingFilm(true));

      try {
        const data = await GetTrandingDay();
        dispatch(AmbilTrandingDay(data));
      } catch (err) {
        dispatch(errorFilm(err.message));
        console.log(err.message);
      } finally {
        dispatch(LoadingFilm(false));
      }
    };

    MoviePopuler();
  }, []);
  console.table(TrandingDay);
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (eror) {
    return <h1 style={{ textAlign: "center" }}>{eror}</h1>;
  }

  function HandleClick(i) {
    if (i.media_type === "movie") {
      Navigate(`/page/${i.id}`);
    }

    if (i.media_type === "tv") {
      Navigate(`/pageSerial/${i.id}`);
    }
  }

  const i = TrandingDay?.[0];

  return i ? (
    <section className="tranding-day">
      <h2>Tranding Day</h2>

      <div className="box-hero">
        <div key={i.id || i.key} className="hero-film">
          {i?.videos?.[0]?.key ? (
            <iframe
              src={`https://www.youtube.com/embed/${i.videos[0].key}`}
              title={i.name || i.title}
              allowFullScreen
            />
          ) : (
            <p>Video tidak tersedia</p>
          )}

          <div className="hero-descripti">
            <h2>{i.name || i.title}</h2>

            <HeroDescription paraf={i.overview} />

            <div>
              <button onClick={() => HandleClick(i)} id="button-selengkapnya">
                <img src={ImgInformation} alt="" />
                <span>Selengkapnya</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <h1>Loading...</h1>
  );
}

function HeroDescription({ paraf }) {
  return (
    <div className="hero-paraf">
      <p>{paraf}</p>
    </div>
  );
}

HeroDescription.propTypes = {
  paraf: PropTypes.string,
};
