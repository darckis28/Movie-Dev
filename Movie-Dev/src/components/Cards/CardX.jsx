import { Link } from "react-router-dom";
import DatePelicula from "../Date/DatePelicula";

function CardX({ name, img, fecha, points, id }) {
  const complete = "https://image.tmdb.org/t/p/original";
  return (
    <Link to={`../movie/${id}`} className="flex gap-4">
      <img
        className="w-32   md:w-20 rounded-lg"
        src={`${complete}${img}`}
        alt={name}
      />
      <div className=" pt-2">
        <h4 className=" font-light">{name}</h4>
        <DatePelicula date={fecha} points={points} id={id} />
      </div>
    </Link>
  );
}

export default CardX;
