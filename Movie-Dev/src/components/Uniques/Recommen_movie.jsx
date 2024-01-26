import { useEffect, useState } from "react";
import getData from "../../data/data";
import "./Recomendacion-Movie.css";
import DatePelicula from "../Date/DatePelicula";
function Recommen_movie() {
  const [top, setTop] = useState({});
  const complete = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    getData("movie/top_rated?")
      .then(({ results }) => {
        const aleatorio = Math.floor(Math.random() * results.length);
        setTop(results[aleatorio]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <article
      style={{ backgroundImage: `url('${complete}${top.backdrop_path}')` }}
      className="article"
    >
      <div className="containner">
        <h2 className="lg:text-5xl font-semibold text-3xl">{top.title}</h2>
        <DatePelicula
          date={top.release_date}
          points={top.vote_average}
          id={top.id}
        />
        <p className="dr:text-xl font-light text-gray-400 pb-7 text-xs">
          {top.overview}
        </p>
        <button className="btn btn--yellow">Ver Pelicula</button>
      </div>
    </article>
  );
}

export default Recommen_movie;
