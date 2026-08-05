import ArrowLeft from "../assets/beranda/anak_panah_kiri.png";
import ArrowRight from "../assets/beranda/anak_panah_kanan.png";
import "./css/anakpanah.css";

export default function AnakPanah({ setref }) {

  function scrollByOffset(offset) {
    if (!setref?.current) return;
    setref.current.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  }

  function handleLeft() {
    scrollByOffset(-400);
  }

  function handleRight() {
    scrollByOffset(400);
  }

  return (
    <div className="anak_panah_groub">
      <div className="anak_panah_kiri">
        <img src={ArrowLeft} onClick={handleLeft} alt="" />
      </div>

      <div className="anak_panah_kanan">
        <img src={ArrowRight} onClick={handleRight} alt="" />
      </div>
    </div>
  );
}