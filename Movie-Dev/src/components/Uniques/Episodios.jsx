import { useEffect, useState } from "react";
import getData from "../../data/data";
import CardEpisodio from "../Cards/CardEpisodio";
import Title from "../shared/Title";
import "./Episodios.css";
function Episodios() {
  const [serie, setSerie] = useState([]);
  useEffect(() => {
    getData(`tv/airing_today?`)
      .then(({ results }) => setSerie(results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <Title position="left" size={"3xl"} color="wjite">
        Series de TV
      </Title>
      <ul className="containner--episodio">
        {serie.slice(0, 10).map((data) => (
          <CardEpisodio
            key={data.id}
            name={data.name}
            img={data.backdrop_path}
            id={data.id}
          />
        ))}
      </ul>
    </section>
  );
}

export default Episodios;
