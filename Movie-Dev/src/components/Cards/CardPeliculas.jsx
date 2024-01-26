import { IoPlayCircleOutline } from "react-icons/io5";
import "./cardPeliculas.css";
import { getFecha, getPoster } from "../../utilities/convertes";
function CardPeliculas({ img, title, date }) {
  return (
    <div className="containner-card-peliculas w-full sm:w-52">
      <img
        className="w-full sm:h-60 object-cover"
        src={getPoster(img)}
        alt=""
      />
      <p className="text-center text-white">{title}</p>
      <span className="absolute top-5 right-1 p-1 bg-yellow-500 rounded-2xl text-sm ">
        {getFecha(date)}
      </span>
      <IoPlayCircleOutline className="icono" />
    </div>
  );
}

export default CardPeliculas;
