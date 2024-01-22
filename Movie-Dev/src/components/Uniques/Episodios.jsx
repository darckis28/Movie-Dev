import CardEpisodio from "../Cards/CardEpisodio";
import Title from "../shared/Title";
import "./Episodios.css";
function Episodios() {
  return (
    <section>
      <Title position="left" size={"3xl"}>
        Episodios
      </Title>
      <ul className="containner--episodio">
        <li className="">
          <CardEpisodio />
        </li>
        <li>
          <CardEpisodio />
        </li>
        <li>
          <CardEpisodio />
        </li>
        <li>
          <CardEpisodio />
        </li>
        <li>
          <CardEpisodio />
        </li>
        <li>
          <CardEpisodio />
        </li>{" "}
        <li>
          <CardEpisodio />
        </li>{" "}
        <li>
          <CardEpisodio />
        </li>
      </ul>
    </section>
  );
}

export default Episodios;
