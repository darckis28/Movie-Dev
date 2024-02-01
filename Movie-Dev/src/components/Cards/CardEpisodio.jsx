import { Link } from "react-router-dom";
import "./cardEpisodio.css";
import { FaRegCirclePlay } from "react-icons/fa6";
import { getPoster } from "../../utilities/convertes";
function CardEpisodio({ name, img, id }) {
  return (
    <Link to={"/serie/" + id} className="containner-card-episodio">
      <img
        className="w-52 rounded-xl transition-all h-32"
        src={getPoster(img)}
        alt={name}
      />
      <p className="text-center transition-all text-nowrap w-52 text-ellipsis overflow-hidden px-2">
        {name}
      </p>
      <FaRegCirclePlay className="icon" />
    </Link>
  );
}

export default CardEpisodio;
