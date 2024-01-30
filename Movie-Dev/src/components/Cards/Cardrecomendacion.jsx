import { Link } from "react-router-dom";
import { getPoster } from "../../utilities/convertes";
import DatePelicula from "../Date/DatePelicula";

function Cardrecomendacion({ img, title, descript, id, points, date }) {
  return (
    <div className="flex gap-4">
      <Link to={`../movie/${id}`}>
        <div className="dr:w-24">
          <img className="w-full" src={getPoster(img)} alt={title} />
        </div>
      </Link>

      <div>
        <Link to={`../movie/${id}`} className="hover:text-yellow-400">
          <h2 className="font-light">{title}</h2>
        </Link>
        <DatePelicula id={id} points={points} date={date} />
        <p className="text-sm font-extralight">{descript}</p>
      </div>
    </div>
  );
}

export default Cardrecomendacion;
