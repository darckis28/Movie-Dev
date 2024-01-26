import "./cardEpisodio.css";
import { FaRegCirclePlay } from "react-icons/fa6";
function CardEpisodio({ name, img }) {
  const complete = "https://image.tmdb.org/t/p/original";
  return (
    <div className="containner-card-episodio">
      <img
        className="w-52 rounded-xl transition-all"
        src={complete + img}
        alt=""
      />
      <p className="text-center transition-all text-nowrap w-52 text-ellipsis overflow-hidden px-2">
        {name}
      </p>
      <FaRegCirclePlay className="icon" />
    </div>
  );
}

export default CardEpisodio;
