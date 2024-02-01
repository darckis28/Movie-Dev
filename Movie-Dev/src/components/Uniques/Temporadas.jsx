import { useEffect, useState } from "react";
import CardSeason from "../Cards/CardSeason";

function Temporadas({ seasons }) {
  const [tempo, setTempo] = useState(null);
  useEffect(() => {
    seasons && setTempo(seasons);
  }, [seasons]);
  return (
    <section className="my-5 mx-6">
      {tempo ? (
        <ul className="flex flex-wrap gap-5 justify-center md:justify-start">
          {tempo.map((temporada) => (
            <li key={temporada.id}>
              <CardSeason
                name={temporada.name}
                img={temporada.poster_path}
                fecha={temporada.air_date}
                episodios={temporada.episode_count}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>aaa</div>
      )}
    </section>
  );
}

export default Temporadas;
