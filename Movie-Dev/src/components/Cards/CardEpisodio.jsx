import "./cardEpisodio.css";
import { FaRegCirclePlay } from "react-icons/fa6";
function CardEpisodio() {
  return (
    <div className="containner-card-episodio">
      <img
        className="w-52 rounded-xl transition-all"
        src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
        alt=""
      />
      <p className="text-center transition-all">imagen piola</p>
      <FaRegCirclePlay className="icon" />
    </div>
  );
}

export default CardEpisodio;
