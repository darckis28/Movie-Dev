import { useEffect, useState } from "react";
import getData from "../../data/data";
import CardEpisodio from "../Cards/CardEpisodio";
import Title from "../shared/Title";
import "./Episodios.css";
function Episodios() {
  const [serie, setSerie] = useState([]);
  useEffect(() => {
    getData(`tv/on_the_air`)
      .then(({ results }) => setSerie(results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <Title position="left" size={"3xl"} color="wjite">
        Series
      </Title>
      <ul className="containner--episodio">
        {serie.slice(0, 10).map((data) => (
          <CardEpisodio
            key={data.id}
            name={data.name}
            img={data.backdrop_path}
          />
        ))}
      </ul>
    </section>
  );
}

export default Episodios;
