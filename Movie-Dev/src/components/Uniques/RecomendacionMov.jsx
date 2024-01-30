import { useEffect, useState } from "react";
import Title from "../shared/Title";
import getData from "../../data/data";
import Cardrecomendacion from "../Cards/Cardrecomendacion";

function RecomendacionMov({ id }) {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    getData(`movie/${id}/recommendations?`)
      .then(({ results }) => setMovies(results.slice(0, 5)))
      .catch((e) => console.log(e));
  }, [id]);
  return (
    <article className="mt-5">
      <Title size={"3xl"} color={"white"} position="left">
        Otras Películas{" "}
      </Title>
      {movies.length > 1 ? (
        <ul>
          {movies.map((data) => (
            <li className="mb-6" key={data.id}>
              <Cardrecomendacion
                img={data.poster_path}
                title={data.title}
                descript={data.overview}
                id={data.id}
                points={data.vote_average}
                date={data.release_date}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-full h-[250px] flex items-center justify-center">
          <h2 className="text-gray-600">No Hay Recomendaciones</h2>
        </div>
      )}
    </article>
  );
}

export default RecomendacionMov;
