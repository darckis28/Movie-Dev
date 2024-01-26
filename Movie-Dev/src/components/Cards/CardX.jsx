import DatePelicula from "../Date/DatePelicula";

function CardX({ name, img, fecha, points, id }) {
  const complete = "https://image.tmdb.org/t/p/original";
  return (
    <div className="flex gap-4">
      <img
        className="w-32   md:w-20 rounded-lg"
        src={`${complete}${img}`}
        alt=""
      />
      <div className=" pt-2">
        <h4 className=" font-light">{name}</h4>
        <DatePelicula date={fecha} points={points} id={id} />
      </div>
    </div>
  );
}

export default CardX;
