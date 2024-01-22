import { IoPlayCircleOutline } from "react-icons/io5";
import "./cardPeliculas.css";
function CardPeliculas() {
  return (
    <div className="containner-card-peliculas">
      <img
        className="w-full"
        src="https://m.media-amazon.com/images/I/6172sX-TInL._AC_UF894,1000_QL80_.jpg"
        alt=""
      />
      <p className="text-center">Bleach</p>
      <span className="absolute top-5 right-1 p-1 bg-yellow-500 rounded-2xl text-sm">
        2023
      </span>
      <IoPlayCircleOutline className="icono" />
    </div>
  );
}

export default CardPeliculas;
